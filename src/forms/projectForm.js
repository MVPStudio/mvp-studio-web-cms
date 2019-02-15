import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
// import * as yup from 'yup'
import StyledForm from './styledForm';

export default class ProjectForm extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            formName: 'Project_Onboarding_Form', // Must be same as airtable base name
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
            const { setFormState, setSubmitResponse } = this.props;
            const response = await (await fetch(
              '/api/airtable', // path to api proxy
              {
                method: 'PATCH',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(values),
              },
            )).json();
            if (response.statusCode === 200) {
              actions.resetForm();
            }
            setFormState(true);
            setSubmitResponse(response.message);
            actions.setSubmitting(false);
          }}
          render={({
            touched,
            errors,
            isSubmitting,
            handleSubmit,
            isValid,
          }) => (
            <StyledForm onSubmit={handleSubmit}>
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
    );
  }
}

ProjectForm.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
