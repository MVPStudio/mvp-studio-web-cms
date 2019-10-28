import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import InternForm from './internForm';
import { formSubmit } from '../utilities';

const InternContainer = ({ setFormState, setSubmitResponse }) => {
  const initialValues = {
    formName: 'Intern_Form',
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
    { value: 'Front end', label: 'Developer: Front End' },
    { value: 'Back end', label: 'Developer: Back End' },
    { value: 'Web', label: 'Developer: Web' },
    { value: 'Apps', label: 'Developer: Apps' },
    { value: 'Designer', label: 'Designer' },
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
        formSubmit(values, actions, setFormState, setSubmitResponse);
      }}
      render={props => (
        <InternForm
          skillOptions={skillOptions}
          availabilityOptions={availabilityOptions}
          // formik-bag
          {...props}
        />
      )}
    />
  );
};

InternContainer.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};
export default InternContainer;
