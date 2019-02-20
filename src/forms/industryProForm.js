import React, { PureComponent } from 'react';
import { Field } from 'formik';
import PropTypes, { object } from 'prop-types';
import Select from 'react-select';
import StyledForm from './styledForm';

export default class IndustryProForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool,
    isValid: PropTypes.bool,
    setFieldValue: PropTypes.func.isRequired,
    skillOptions: PropTypes.arrayOf(object).isRequired,
    showcaseOptions: PropTypes.arrayOf(object).isRequired,
  };

  render() {
    const {
      handleSubmit,
      errors,
      touched,
      isSubmitting,
      isValid,
      setFieldValue,
      skillOptions,
      showcaseOptions,
    } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <h3>Industry Professional Form</h3>
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
            name="Skill_Category"
            isMulti="true"
            closeMenuOnSelect="false"
            options={skillOptions}
            onChange={value =>
              setFieldValue('Skill_Category', value.map(v => v.value))
            }
          />
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
        <button type="submit" disabled={isSubmitting || !isValid}>
          Submit
        </button>
      </StyledForm>
    );
  }
}
