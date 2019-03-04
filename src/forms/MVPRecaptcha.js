import React from 'react';
import PropTypes from 'prop-types';
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
}) => {
  // Random id to enable mulitple reCaptchas on a page ... stole from https://gist.github.com/6174/6062387
  const elementID =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);
  return (
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
        sitekey="6LcBOpUUAAAAAAqXYSvU71jm4lXwCJ_Xni1Kvz5q"
        render="explicit"
        theme="dark"
        verifyCallback={response => {
          setFieldValue('recaptcha', response);
          handleSubmit();
        }}
        size="invisible"
        elementID={elementID}
      />
    </>
  );
};

MVPRecaptcha.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default MVPRecaptcha;
