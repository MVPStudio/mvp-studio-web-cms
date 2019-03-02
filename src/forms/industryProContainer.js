import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import useShowcase from '../hooks/useShowcase';
import IndustryProForm from './industryProForm';

const IndustryProFormContainer = ({ setFormState, setSubmitResponse }) => {
  const skillOptions = [
    { value: 'FrontEnd', label: 'Developer: Front End' },
    { value: 'BackEnd', label: 'Developer: Back End' },
    { value: 'Web', label: 'Developer: Web' },
    { value: 'Apps', label: 'Developer: Apps' },
    { value: 'Design', label: 'Design' },
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
        setFieldValue,
      }) => (
        <IndustryProForm
          // handleSkillCategoryChange={handleSkillCategoryChange}
          skillOptions={skillOptions}
          showcaseOptions={showcaseOptions}
          // formik-bag
          touched={touched}
          errors={errors}
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          isValid={isValid}
          setFieldValue={setFieldValue}
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
