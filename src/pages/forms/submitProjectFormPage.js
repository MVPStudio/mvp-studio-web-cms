import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import FormSubmitAnimation from '../../forms/formSubmitAnimation';
import ProjectContainer from '../../forms/projectContainer';

const SubmitProjectFormPage = () => (
  <Layout>
    <SEO title="Submit a Project" />
    <h1 style={{ textAlign: 'center' }}>Submit a Project</h1>

    {/* Make choice for intern or pro */}
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <ProjectContainer
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
  </Layout>
);

export default SubmitProjectFormPage;
