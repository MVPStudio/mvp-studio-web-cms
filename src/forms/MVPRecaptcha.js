import React from 'react';
import Recaptcha from 'react-recaptcha';

let recaptchaInstance;
export const executeCaptcha = e => {
  e.preventDefault();
  recaptchaInstance.execute();
};
const MVPRecaptcha = ({
  setFieldValue,
  handleSubmit,
  isSubmitting,
  isValid,
}) => (
  <>
    <button
      type="submit"
      onSubmit={executeCaptcha}
      disabled={isSubmitting || !isValid}
    >
      Submit
    </button>
    <Recaptcha
      ref={e => (recaptchaInstance = e)}
      sitekey="6LccvJQUAAAAANdVDhwSeAM00jvgUabGSi6Vjbza"
      render="explicit"
      theme="dark"
      verifyCallback={response => {
        setFieldValue('recaptcha', response);
        handleSubmit();
      }}
      size="invisible"
    />
  </>
);

export default MVPRecaptcha;
