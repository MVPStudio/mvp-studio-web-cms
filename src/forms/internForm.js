import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import * as yup from 'yup'
import StyledForm from './styledForm';

export default class InternForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          formName: 'Intern_Form', // Must be same as airtable base name
          Name: '',
          Email: '',
          Github: '',
          Skill: [],
          Availability: [],
          Major: '',
          Website: '',
          Looking_For_Capstone: false,
        }}
        validationSchema // currently validated with HTML
        onSubmit={async (values, actions) => {
          console.log('Form submitted');
          console.log(values);
          console.log(actions);
          const { setFormState, setSubmitResponse } = this.props;
          setFormState(true);
          setSubmitResponse('Thanks for submitting!');
          // // TODO implement lambda connection
          // const response = await (await fetch(
          //   '/.netlify/functions/airtable', // path to api proxy
          //   {
          //     method: 'PATCH',
          //     headers: {
          //       'Content-type': 'application/json',
          //     },
          //     body: JSON.stringify(values),
          //   }
          // )).json()
          // console.log(response)
          // if (response.statusCode === 200) {
          //   this.props.setSubmitResponse(response.body.message)
          // } else {
          //   this.props.setSubmitResponse(response.body.message)
          //   //this.setState({ submitResponse: response.body.message })
          // }
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        render={({
          touched,
          errors,
          isSubmitting,
          handleSubmit,
          isValid,
          setFieldValue,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <div>
              <h3>Intern Form</h3>
              <p>Please provide the following information:</p>
            </div>
            <label>
              Name:*
              <Field
                className={touched.Name && errors.Name ? 'invalid' : ''}
                type="text"
                name="Name"
                required
              />
            </label>
            <label>
              Email:*
              <Field
                className={touched.Email && errors.Email ? 'invalid' : ''}
                type="email"
                name="Email"
                required
              />
            </label>
            <label>
              Github Handle:
              <Field type="text" name="Github" />
            </label>
            <label>
              Skills:
              <Field
                className="select"
                component={Select}
                name="Skill"
                isMulti="true"
                closeMenuOnSelect="false"
                options={[
                  { value: 'FrontEnd', label: 'Developer: Front End' },
                  { value: 'BackEnd', label: 'Developer: Back End' },
                  { value: 'Web', label: 'Developer: Web' },
                  { value: 'Apps', label: 'Developer: Apps' },
                  { value: 'Design', label: 'Design' },
                  { value: 'Agile PM', label: 'Agile PM' },
                ]}
                onChange={value =>
                  setFieldValue('Skill', value.map(v => v.value))
                }
              />
            </label>

            <label>
              Availability
              <Field
                className="select"
                component={Select}
                name="Availability"
                isMulti
                closeMenuOnSelect="false"
                options={[
                  { value: 'Fall', label: 'Fall' },
                  { value: 'Winter', label: 'Winter' },
                  { value: 'Spring', label: 'Spring' },
                  { value: 'Summer', label: 'Summer' },
                ]}
                onChange={value =>
                  setFieldValue('Availability', value.map(v => v.value))
                }
              />
            </label>
            <label>
              Major:
              <Field type="text" name="Major" />
            </label>
            <label>
              Website:
              <Field type="text" name="Website" />
            </label>
            <label className="checkbox-label">
              Looking for a Capstone:
              <Field
                className="checkbox"
                type="checkbox"
                name="Looking_For_Capstone"
              />
            </label>
            <button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </button>
          </StyledForm>
        )}
      />
    );
  }
}

InternForm.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
