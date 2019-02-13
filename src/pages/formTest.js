import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import ProjectForm from '../forms/projectForm';
import FormSubmitAnimation from '../forms/formSubmitAnimation';
// import IndustryProForm from '../forms/industryProForm';
// import InternForm from '../forms/internForm';
import SponsorForm from '../forms/sponsorForm';

const FormTest = () => (
  <Layout>
    <SEO title="Form Tests" />
    <h1 style={{ textAlign: 'center' }}>Forms Test Page</h1>
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <SponsorForm
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default FormTest;
