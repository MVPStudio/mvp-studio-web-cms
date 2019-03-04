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
              touched.Name_of_project && errors.Name_of_project ? 'invalid' : ''
            }
            type="text"
            name="Name_of_project"
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
          Short Description:
          <Field type="text" name="Short_description" />
        </label>
        <label>
          Stakeholder Organization:
          <Field type="text" name="Stakeholder_organization" />
        </label>
        <label>
          Community Partners:
          <Field component="textarea" name="Community_partners" />
        </label>
        <label>
          Industry Partners:
          <Field component="textarea" name="Industry_partners" />
        </label>
        <label>
          Link to demo:
          <Field type="text" name="Link" />
          {/* type url requires "http"...  */}
        </label>
        <label>
          Projected Budget:
          <Field type="text" name="Projected_budget" />
        </label>
        <label>
          Existing Team:
          <Field component="textarea" name="Existing_team" />
        </label>
        <label>
          Existing Sponsors
          <Field component="textarea" name="Existing_sponsors" />
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
