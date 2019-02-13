import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import FormSubmitAnimation from '../../forms/formSubmitAnimation';
import SponsorForm from '../../forms/sponsorForm';

const SponsorFormPage = () => (
  <Layout>
    <SEO title="Become a Sponsor" />
    <h1 style={{ textAlign: 'center' }}>Become a Sponsor</h1>

    {/* Make choice for intern or pro */}
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <SponsorForm
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
  </Layout>
);

export default SponsorFormPage;
