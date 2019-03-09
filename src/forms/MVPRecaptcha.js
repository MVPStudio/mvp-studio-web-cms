import React from 'react';
import PropTypes from 'prop-types';
import Reaptcha from 'reaptcha';

let captcha;
export const executeCaptcha = e => {
  e.preventDefault();
  captcha.execute();
};

const MABReaptcha = ({
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
    <Reaptcha
      ref={e => (captcha = e)}
      sitekey="6LcBOpUUAAAAAAqXYSvU71jm4lXwCJ_Xni1Kvz5q"
      onVerify={response => {
        setFieldValue('recaptcha', response);
        handleSubmit();
      }}
      size="invisible"
      explicit
      onLoad={() => captcha.renderExplicitly()}
    />
  </>
);

MABReaptcha.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default MABReaptcha;
