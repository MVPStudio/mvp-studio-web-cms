import React, { Component } from 'react';
import { Link } from 'gatsby';
import { InternProGears } from '../../components/GearButtons';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import FormSubmitAnimation from '../../forms/formSubmitAnimation';
import IndustryProContainer from '../../forms/industryProContainer';
import InternContainer from '../../forms/internContainer';

class GetInvolvedFormPage extends Component {
  state = {
    internOrPro: '',
  };

  handleInternOrPro = (form, e) => {
    this.setState({ internOrPro: form });
  };

  renderInternForm = () => (
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <InternContainer
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
  );

  renderProForm = () => (
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <IndustryProContainer
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
  );

  render() {
    const { internOrPro } = this.state;
    return (
      <Layout>
        <SEO title="Get Involved" />
        <h1 style={{ textAlign: 'center' }}>Get Involved!</h1>
        <InternProGears handleInternOrPro={e => this.handleInternOrPro(e)} />
        {internOrPro === 'intern' && this.renderInternForm()}
        {internOrPro === 'pro' && this.renderProForm()}
      </Layout>
    );
  }
}

export default GetInvolvedFormPage;
