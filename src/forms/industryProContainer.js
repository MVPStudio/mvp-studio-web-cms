import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import useShowcase from '../hooks/useShowcase';
import IndustryProForm from './industryProForm';
import { formSubmit } from '../utilities';

const IndustryProFormContainer = ({ setFormState, setSubmitResponse }) => {
  const skillOptions = [
    { value: 'Front end', label: 'Developer: Front End' },
    { value: 'Back end', label: 'Developer: Back End' },
    { value: 'Web', label: 'Developer: Web' },
    { value: 'Apps', label: 'Developer: Apps' },
    { value: 'Designer', label: 'Designer' },
    { value: 'Agile PM', label: 'Agile PM' },
    { value: 'Product Owner', label: 'Product Owner' },
  ];

  const initialValues = {
    formName: 'Industry_Professional_Form', // Must be same as airtable base name
    Name: '',
    Email: '',
    Github: '',
    Skill_Category: [],
    Interested_In_Projects: [],
  };

  const showcaseOptions = useShowcase();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema // currently validated with HTML
      onSubmit={async (values, actions) => {
        formSubmit(values, actions, setFormState, setSubmitResponse);
      }}
      render={props => (
        <IndustryProForm
          // handleSkillCategoryChange={handleSkillCategoryChange}
          skillOptions={skillOptions}
          showcaseOptions={showcaseOptions}
          // formik-bag
          {...props}
        />
      )}
    />
  );
};

IndustryProFormContainer.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
export default IndustryProFormContainer;
