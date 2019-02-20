import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import useShowcase from '../hooks/useShowcase';
import SponsorForm from './sponsorForm';

const SponsorFormContainer = ({ setFormState, setSubmitResponse }) => {
  const sponsorOptions = [
    { value: 'Cash', label: 'Cash Funding' },
    { value: 'Development', label: 'Development Labor' },
    { value: 'Design', label: 'Design Labor' },
    { value: 'Advertising', label: 'Advertising' },
    { value: 'Agile PM', label: 'Agile PM Labor' },
  ];

  const typeOfOrganization = [
    { value: 'Private', label: 'Private' },
    { value: 'Public', label: 'Public' },
    { value: '501c3', label: '501c3' },
  ];

  const initialValues = {
    formName: 'Sponsor_Form', // Must be same as airtable base name
    Name: '',
    Email: '',
    Type_Of_Organization: [],
    Project_Types_Interest: '',
    Interested_In_Projects: [],
    Type_Of_Sponsorship: [],
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
        <SponsorForm
          sponsorOptions={sponsorOptions}
          showcaseOptions={showcaseOptions}
          typeOfOrganization={typeOfOrganization}
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

SponsorFormContainer.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
export default SponsorFormContainer;
