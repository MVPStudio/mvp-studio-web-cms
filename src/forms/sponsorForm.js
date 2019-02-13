import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import * as yup from 'yup'
import { graphql, StaticQuery } from 'gatsby';
import StyledForm from './styledForm';

export default class SponsorForm extends Component {
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
              formName: 'Sponsor_Form', // Must be same as airtable base name
              Name: '',
              Email: '',
              Type_Of_Organization: [],
              Project_Types_Interest: '',
              Interested_In_Projects: [],
              Type_Of_Sponsorship: [],
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
                  <h3>Sponsor Form</h3>
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
                  Type of Organization:
                  <Field
                    className="select"
                    component={Select}
                    name="Type_Of_Organization"
                    options={[
                      { value: 'Private', label: 'Private' },
                      { value: 'Public', label: 'Public' },
                      { value: '501c3', label: '501c3' },
                    ]}
                    onChange={value =>
                      setFieldValue('Type_Of_Organization', value.value)
                    }
                  />
                </label>
                <label>
                  Types of Projects Interested in:
                  <Field component="textarea" name="Project_Types_Interest" />
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
                <label>
                  Type of Sponsorship:
                  <Field
                    className="select"
                    component={Select}
                    name="Type_Of_Sponsorship"
                    isMulti
                    closeMenuOnSelect="false"
                    options={[
                      { value: 'Cash', label: 'Cash Funding' },
                      { value: 'Development', label: 'Development Labor' },
                      { value: 'Design', label: 'Design Labor' },
                      { value: 'Advertising', label: 'Advertising' },
                      { value: 'Agile PM', label: 'Agile PM Labor' },
                    ]}
                    onChange={value =>
                      setFieldValue(
                        'Type_Of_Sponsorship',
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

SponsorForm.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
