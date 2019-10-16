import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import ProjectForm from './projectForm';
import { formSubmit } from '../utilities';

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
        formSubmit(values, actions, setFormState, setSubmitResponse);
      }}
      render={props => (
        <ProjectForm
          // formik-bag
          {...props}
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
