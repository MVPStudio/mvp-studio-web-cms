import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import PropTypes from 'prop-types';

class FormSubmitAnimation extends Component {
  static propTypes = {
    children: PropTypes.func,
  };

  state = {
    submitResponse: '',
    formSubmitted: false,
  };

  setFormStateTrue = () => {
    this.setState({ formSubmitted: true });
  };

  setSubmitResponse = submitResponse => {
    this.setState({ submitResponse });
  };

  renderResponse = props => {
    const { submitResponse } = this.state;
    return (
      <animated.h2 style={{ textAlign: 'center', ...props }}>
        {submitResponse}
      </animated.h2>
    );
  };

  renderForm = props => {
    const { children } = this.props;
    return (
      <animated.div style={props}>
        {children({
          setFormState: this.setFormStateTrue,
          setSubmitResponse: this.setSubmitResponse,
        })}
      </animated.div>
    );
  };

  render() {
    const { formSubmitted } = this.state;
    return (
      <Transition
        items={formSubmitted}
        native
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
      >
        {submitted => (submitted ? this.renderResponse : this.renderForm)}
      </Transition>
    );
  }
}

export default FormSubmitAnimation;
