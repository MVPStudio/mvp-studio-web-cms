import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
//import * as yup from 'yup'
import styled from 'styled-components'
import { elevation } from '../utilities'

const StyledForm = styled(Form)`
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  label {
    max-width: 100%;
    margin: 0.5rem;
    text-align: left;
  }
  label,
  input,
  textarea,
  button {
    font-size: 1.25rem;
  }

  input,
  textarea {
    width: 100%;
    font-family: inherit;
    padding: 0.5rem;
    ${elevation[2]};
    margin-top: 0.25rem;
  }
  button {
    margin: 0 auto;
    width: 250px;
    background: #2b2b2b;
    border: none;
    height: 3rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px #333;
    color: white;
    cursor: pointer;
    font-family: inherit;
    transition: 0.2s;
    :hover {
      box-shadow: 0px 5px 10px #000;
      transform: translate(0, -2px);
    }
    :disabled {
      background-color: #aaa;
    }
  }
`

export default class ProjectForm extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            // formName: 'Project_Onboarding_Form', // Must be same as airtable base name
            Name_of_project: '',
            Email: '',
            Short_description: '',
            Stakeholder_organization: '',
            Community_partners: '',
            Industry_partners: '',
            Link: '',
            Projected_budget: '',
            Existing_team: '',
            Existing_sponsors: '',
          }}
          validationSchema // currently validated with HTML
          onSubmit={async (values, actions) => {
            console.log('Form submitted')
            console.log(values)
            console.log(actions)
            // TODO implement lambda connection
            actions.setSubmitting(false)
            actions.resetForm({})
            
          }}
        
          render={({
            touched,
            errors,
            isSubmitting,
            handleSubmit,
            isValid,
            resetForm,
            initialValues,
          }) => (
            <StyledForm onSubmit={handleSubmit} >
              <div>
                <h3>Project Onboarding Form</h3>
                <p>Please provide the following information:</p>
              </div>
              <label>
                Project Name:*
                <Field
                  className={
                    touched.Name_of_project && errors.Name_of_project
                      ? 'invalid'
                      : ''
                  }
                  type="text"
                  name="Name_of_project"
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
                Short Description:
                <Field type="text" name="Short_description" />
              </label>
              <label>
                Stakeholder Organization:
                <Field type="text" name="Stakeholder_organization" />
              </label>
              <label>
                Community Partners:
                <Field component="textarea" name="Community_partners" />
              </label>
              <label>
                Industry Partners:
                <Field component="textarea" name="Industry_partners" />
              </label>
              <label>
                Link to demo:
                <Field type="text" name="Link" /> 
                {/* type url requires "http"...  */}
              </label>
              <label>
                Projected Budget:
                <Field type="text" name="Projected_budget" />
              </label>
              <label>
                Existing Team:
                <Field component="textarea" name="Existing_team" />
              </label>
              <label>
                Existing Sponsors
                <Field component="textarea" name="Existing_sponsors" />
              </label>
              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </StyledForm>
          )}
        />
      </div>
    )
  }
}
