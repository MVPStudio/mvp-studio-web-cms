import React from 'react';
import { Field } from 'formik';

export const Name = ({ touched, errors }) => (
  <>
    <label htmlFor="name">Name:</label>
    <Field
      className={touched.name && errors.name ? 'invalid' : ''}
      id="name"
      type="text"
      name="name"
      required
    />
  </>
);

export const Email = ({ touched, errors }) => (
  <>
    <label htmlFor="email">Email:</label>
    <Field
      className={touched.email && errors.email ? 'invalid' : ''}
      id="email"
      type="email"
      name="email"
      required
    />
  </>
);

export const Submit = ({ isSubmitting, isValid }) => (
  <button type="submit" disabled={isSubmitting || !isValid}>
    Submit
  </button>
);
