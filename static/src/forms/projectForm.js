import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import MVPRecaptcha, { executeCaptcha } from './MVPRecaptcha';
// import * as yup from 'yup'
import StyledForm from './styledForm';

export default class ProjectForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  render() {
    const {
      handleSubmit,
      errors,
      touched,
      isSubmitting,
      isValid,
      setFieldValue,
    } = this.props;
    return (
      <StyledForm onSubmit={executeCaptcha}>
        <div>
          <h3>Project Onboarding Form</h3>
          <p>Please provide the following information:</p>
        </div>
        <label>
          Project Name:*
          <Field
            className={
              touched.projectName && errors.projectName ? 'invalid' : ''
            }
            type="text"
            name="projectName"
            required
          />
        </label>
        <label>
          Project Owner Name:*
          <Field
            className={touched.poName && errors.poName ? 'invalid' : ''}
            type="text"
            name="poName"
            required
          />
        </label>
        <label>
          Project Owner Email:*
          <Field
            className={touched.poEmail && errors.poEmail ? 'invalid' : ''}
            type="email"
            name="poEmail"
            required
          />
        </label>
        <label>
          Short Description*:
          <Field type="textarea" name="description" required />
        </label>
        <label>
          Link to Full Description:
          {/* type url requires "http"...  */}
          <Field type="text" name="descriptionLink" />
        </label>
        <label>
          Organization Link:
          <Field type="text" name="orgLink" />
        </label>
        <label>
          Logo Link:
          <Field type="text" name="logoLink" />
        </label>
        <MVPRecaptcha
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isValid={isValid}
        />
      </StyledForm>
    );
  }
}
