import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import ProjectForm from '../forms/projectForm';
import FormAnimation from '../forms/formAnimation';
import IndustryProForm from '../forms/industryProForm';

const FormTest = () => (
  <Layout>
    <SEO title="Form Tests" />
    <h1 style={{ textAlign: 'center' }}>Forms Test Page</h1>
    <FormAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <IndustryProForm
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormAnimation>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default FormTest;
