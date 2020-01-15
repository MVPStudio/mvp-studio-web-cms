import React, { PureComponent } from 'react';
import { Field } from 'formik';
import PropTypes, { object } from 'prop-types';
import Select from 'react-select';
import MVPRecaptcha, { executeCaptcha } from './MVPRecaptcha';
import StyledForm from './styledForm';

export default class VolunteerForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    roleOptions: PropTypes.arrayOf(object).isRequired,
    expOptions: PropTypes.arrayOf(object).isRequired,
  };

  render() {
    const {
      handleSubmit,
      errors,
      touched,
      isSubmitting,
      isValid,
      setFieldValue,
      roleOptions,
      expOptions,
    } = this.props;
    return (
      <StyledForm onSubmit={executeCaptcha}>
        <div>
          <h3>Volunteer Form</h3>
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
          Role:
          <Field
            className="select"
            component={Select}
            name="Role_Category"
            isMulti="true"
            closeMenuOnSelect="false"
            options={roleOptions}
            onChange={value =>
              setFieldValue('Role_Category', value.map(v => v.value))
            }
          />
        </label>
        <label>
          Experience:
          <Field
            className="select"
            component={Select}
            name="Experience_Category"
            isMulti="true"
            closeMenuOnSelect="false"
            options={expOptions}
            onChange={value =>
              setFieldValue('Experience_Category', value.map(v => v.value))
            }
          />
        </label>
        <label>
          Why are you interested?:
          <Field type="text" name="Why_Text" />
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
