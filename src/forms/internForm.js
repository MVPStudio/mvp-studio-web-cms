import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes, { object } from 'prop-types';
import Select from 'react-select';
// import * as yup from 'yup'
import StyledForm from './styledForm';
import MVPRecaptcha, { executeCaptcha } from './MVPRecaptcha';

export default class InternForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    availabilityOptions: PropTypes.arrayOf(object).isRequired,
    skillOptions: PropTypes.arrayOf(object).isRequired,
  };

  render() {
    const {
      handleSubmit,
      errors,
      touched,
      isSubmitting,
      isValid,
      setFieldValue,
      availabilityOptions,
      skillOptions,
    } = this.props;
    return (
      <StyledForm onSubmit={executeCaptcha}>
        <div>
          <h3>Intern Form</h3>
          <p>Please provide the following information:</p>
        </div>
        <label>
          Name:*
          <Field
            className={touched.Name && errors.Name ? 'invalid' : ''}
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
          Github Handle:
          <Field type="text" name="Github" />
        </label>
        <label>
          Skills:
          <Field
            className="select"
            component={Select}
            name="Skill"
            isMulti="true"
            closeMenuOnSelect="false"
            options={skillOptions}
            onChange={value => setFieldValue('Skill', value.map(v => v.value))}
          />
        </label>

        <label>
          Availability
          <Field
            className="select"
            component={Select}
            name="Availability"
            isMulti
            closeMenuOnSelect="false"
            options={availabilityOptions}
            onChange={value =>
              setFieldValue('Availability', value.map(v => v.value))
            }
          />
        </label>
        <label>
          Major:
          <Field type="text" name="Major" />
        </label>
        <label>
          Website:
          <Field type="text" name="Website" />
        </label>
        <label className="checkbox-label">
          Looking for a Capstone:
          <Field
            className="checkbox"
            type="checkbox"
            name="Looking_For_Capstone"
          />
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
