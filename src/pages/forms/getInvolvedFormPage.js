import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
// import ProjectForm from '../forms/projectForm';
import FormSubmitAnimation from '../../forms/formSubmitAnimation';
// import IndustryProForm from '../forms/industryProForm';
// import SponsorForm from '../forms/sponsorForm';
import InternForm from '../../forms/internForm';

const GetInvolvedFormPage = () => (
  <Layout>
    <SEO title="Get Involved" />
    <h1 style={{ textAlign: 'center' }}>Get Involved!</h1>

    {/* Make choice for intern or pro */}
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <InternForm
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default GetInvolvedFormPage;
