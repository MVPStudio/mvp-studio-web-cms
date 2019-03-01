import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import Recaptcha from 'react-recaptcha';
import StyledForm from './styledForm';

const FooterContactForm = ({ setFormState, setSubmitResponse }) => {
  const initialValues = {
    formName: 'contact',
    Name: '',
    Email: '',
    Message: '',
    recaptcha: '',
  };
  let recaptchaInstance;
  const executeCaptcha = function() {
    recaptchaInstance.execute();
  };
  return (
    <Formik
      initialValues={initialValues}
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
        handleSubmit,
        touched,
        errors,
        isSubmitting,
        isValid,
        setFieldValue,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
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
          <Recaptcha
            ref={e => (recaptchaInstance = e)}
            sitekey="6LccvJQUAAAAANdVDhwSeAM00jvgUabGSi6Vjbza"
            render="explicit"
            theme="dark"
            verifyCallback={response => {
              setFieldValue('recaptcha', response);
              handleSubmit();
            }}
            onloadCallback={() => {
              console.log('done loading!');
            }}
            size="invisible"
          />
          {errors.recaptcha && touched.recaptcha && <p>{errors.recaptcha}</p>}
          <button
            onClick={executeCaptcha}
            type="submit"
            disabled={isSubmitting || !isValid}
          >
            Submit
          </button>
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
