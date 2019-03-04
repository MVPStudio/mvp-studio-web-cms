import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes, { object } from 'prop-types';
import Select from 'react-select';
import StyledForm from './styledForm';
import MVPRecaptcha, { executeCaptcha } from './MVPRecaptcha';

export default class SponsorForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    sponsorOptions: PropTypes.arrayOf(object).isRequired,
    showcaseOptions: PropTypes.arrayOf(object).isRequired,
    typeOfOrganization: PropTypes.arrayOf(object).isRequired,
  };

  render() {
    const {
      handleSubmit,
      errors,
      touched,
      isSubmitting,
      isValid,
      setFieldValue,
      sponsorOptions,
      showcaseOptions,
      typeOfOrganization,
    } = this.props;
    return (
      <StyledForm onSubmit={executeCaptcha}>
        <div>
          <h3>Sponsor Form</h3>
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
          Type of Organization:
          <Field
            className="select"
            component={Select}
            name="Type_Of_Organization"
            options={typeOfOrganization}
            onChange={value =>
              setFieldValue('Type_Of_Organization', value.value)
            }
          />
        </label>
        <label>
          Types of Projects Interested in:
          <Field component="textarea" name="Project_Types_Interest" />
        </label>
        <label>
          Interested in Projects:
          <Field
            className="select"
            component={Select}
            name="Interested_In_Projects"
            isMulti
            closeMenuOnSelect="false"
            options={showcaseOptions}
            onChange={value =>
              setFieldValue('Interested_In_Projects', value.map(v => v.value))
            }
          />
        </label>
        <label>
          Type of Sponsorship:
          <Field
            className="select"
            component={Select}
            name="Type_Of_Sponsorship"
            isMulti
            closeMenuOnSelect="false"
            options={sponsorOptions}
            onChange={value =>
              setFieldValue('Type_Of_Sponsorship', value.map(v => v.value))
            }
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
