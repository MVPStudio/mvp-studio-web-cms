import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import InternForm from './internForm';

const InterContainer = ({ setFormState, setSubmitResponse }) => {
  const initialValues = {
    formName: 'Intern_Form', // Must be same as airtable base name
    Name: '',
    Email: '',
    Github: '',
    Skill: [],
    Availability: [],
    Major: '',
    Website: '',
    Looking_For_Capstone: false,
  };

  const skillOptions = [
    { value: 'FrontEnd', label: 'Developer: Front End' },
    { value: 'BackEnd', label: 'Developer: Back End' },
    { value: 'Web', label: 'Developer: Web' },
    { value: 'Apps', label: 'Developer: Apps' },
    { value: 'Design', label: 'Design' },
    { value: 'Agile PM', label: 'Agile PM' },
  ];
  const availabilityOptions = [
    { value: 'Fall', label: 'Fall' },
    { value: 'Winter', label: 'Winter' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Summer', label: 'Summer' },
  ];

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
        <InternForm
          skillOptions={skillOptions}
          availabilityOptions={availabilityOptions}
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

InterContainer.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
export default InterContainer;
