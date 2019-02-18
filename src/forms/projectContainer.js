import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import ProjectForm from './projectForm';

const ProjectContainer = ({ setFormState, setSubmitResponse }) => {
  const initialValues = {
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
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema // currently validated with HTML
      onSubmit={async (values, actions) => {
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
      render={({ touched, errors, isSubmitting, handleSubmit, isValid }) => (
        <ProjectForm
          // formik-bag
          touched={touched}
          errors={errors}
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          isValid={isValid}
        />
      )}
    />
  );
};

ProjectContainer.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
export default ProjectContainer;
