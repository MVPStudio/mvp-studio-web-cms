import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import useShowcase from '../hooks/useShowcase';
import SponsorForm from './sponsorForm';
import { formSubmit } from '../utilities';

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
    formName: 'Sponsor_Form',
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
        <SponsorForm
          sponsorOptions={sponsorOptions}
          showcaseOptions={showcaseOptions}
          typeOfOrganization={typeOfOrganization}
          // formik-bag
          {...props}
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
