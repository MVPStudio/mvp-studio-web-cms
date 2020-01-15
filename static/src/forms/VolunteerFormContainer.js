import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import useShowcase from '../hooks/useShowcase';
import VolunteerForm from './VolunteerForm';
import { formSubmit } from '../utilities';

const VolunteerFormContainer = ({ setFormState, setSubmitResponse }) => {
  const roleOptions = [
    { value: 'Front end', label: 'Developer: Front End' },
    { value: 'Back end', label: 'Developer: Back End' },
    { value: 'Web', label: 'Developer: Web' },
    { value: 'Apps', label: 'Developer: Apps' },
    { value: 'Designer', label: 'Designer' },
    { value: 'Artist', label: 'Artist' },
    { value: 'Agile PM', label: 'Agile PM' },
    { value: 'Product Owner', label: 'Product Owner' },
  ];

  const expOptions = [
    { value: 'Industry Pro', label: 'Industry Professional' },
    { value: 'Student', label: 'Student' },
    { value: 'New', label: 'New to the Industry' },
  ];

  const initialValues = {
    formName: 'Volunteer_Form',
    Name: '',
    Email: '',
    Github: '',
    Role_Category: [],
    Experience_Category: [],
    Why_Text: '',
  };

  const showcaseOptions = useShowcase();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema // currently validated with HTML
      onSubmit={async (values, actions) => {
        console.log(`values = ${values}`)
        console.log(`actions = ${actions}`)
        // formSubmit(values, actions, setFormState, setSubmitResponse);
      }}
      render={props => (
        <VolunteerForm
          roleOptions={roleOptions}
          expOptions={expOptions}
          showcaseOptions={showcaseOptions}
          // formik-bag
          {...props}
        />
      )}
    />
  );
};

VolunteerFormContainer.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
export default VolunteerFormContainer;
