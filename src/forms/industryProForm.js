import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import * as yup from 'yup'
import { graphql, StaticQuery } from 'gatsby';
import StyledForm from './styledForm';

export default class IndustryProForm extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allAirtable(filter: { table: { eq: "Showcase" } }) {
              edges {
                node {
                  data {
                    Name
                  }
                }
              }
            }
          }
        `}
        render={({ allAirtable }) => (
          <Formik
            initialValues={{
              formName: 'Industry_Professional_Form', // Must be same as airtable base name
              Name: '',
              Email: '',
              Github: '',
              Skill_Category: [],
              Interested_In_Projects: [],
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
                  <h3>Industry Professional Form</h3>
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
                    name="Skill_Category"
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
                      setFieldValue('Skill_Category', value.map(v => v.value))
                    }
                  />
                </label>

                <label>
                  Interested in Projects:
                  <Field
                    className="select"
                    component={Select}
                    name="Interested_In_Projects"
                    isMulti
                    closeMenuOnSelect="false"
                    options={allAirtable.edges.map(({ node }) => ({
                      value: node.data.Name,
                      label: node.data.Name,
                    }))}
                    onChange={value =>
                      setFieldValue(
                        'Interested_In_Projects',
                        value.map(v => v.value),
                      )
                    }
                  />
                </label>
                <button type="submit" disabled={isSubmitting || !isValid}>
                  Submit
                </button>
              </StyledForm>
            )}
          />
        )}
      />
    );
  }
}

IndustryProForm.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
