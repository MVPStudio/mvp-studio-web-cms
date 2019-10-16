import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import StyledForm from './styledForm';
import MVPRecaptcha, { executeCaptcha } from './MVPRecaptcha';
import { formSubmit } from '../utilities';

const FooterContactForm = ({ setFormState, setSubmitResponse }) => {
  const initialValues = {
    formName: 'contact',
    Name: '',
    Email: '',
    Message: '',
    recaptcha: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        formSubmit(values, actions, setFormState, setSubmitResponse);
      }}
      render={({
        handleSubmit,
        touched,
        errors,
        isSubmitting,
        isValid,
        setFieldValue,
      }) => (
        <StyledForm onSubmit={executeCaptcha}>
          <h3>Contact Us</h3>
          <label>
            Name:*
            <Field
              className={
                touched.Name_of_project && errors.Name_of_project
                  ? 'invalid'
                  : ''
              }
              type="text"
              name="Name"
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
            Message:
            <Field component="textarea" name="Message" />
          </label>
          <MVPRecaptcha
            setFieldValue={setFieldValue}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            isValid={isValid}
          />
        </StyledForm>
      )}
    />
  );
};
FooterContactForm.propTypes = {
  setFormState: PropTypes.func.isRequired,
  setSubmitResponse: PropTypes.func.isRequired,
};

export default FooterContactForm;
