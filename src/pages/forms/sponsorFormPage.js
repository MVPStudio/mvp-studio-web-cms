import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import FormSubmitAnimation from '../../forms/formSubmitAnimation';
import SponsorFormContainer from '../../forms/sponsorFormContainer';

const SponsorFormPage = () => (
  <Layout>
    <SEO title="Become a Sponsor" />
    <h1 style={{ textAlign: 'center' }}>Become a Sponsor</h1>

    {/* Make choice for intern or pro */}
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <SponsorFormContainer
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
  </Layout>
);

export default SponsorFormPage;
