import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import PropTypes from 'prop-types';

class FormSubmitAnimation extends Component {
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

  render() {
    const { formSubmitted, submitResponse } = this.state;
    const { children } = this.props;
    return (
      <Transition
        items={formSubmitted}
        native
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
      >
        {submitted =>
          !submitted
            ? props => (
                <animated.div style={props}>
                  {children({
                    setFormState: this.setFormStateTrue,
                    setSubmitResponse: this.setSubmitResponse,
                  })}
                </animated.div>
              )
            : props => (
                <animated.h2 style={{ textAlign: 'center', ...props }}>
                  {submitResponse}
                </animated.h2>
              )
        }
      </Transition>
    );
  }
}

FormSubmitAnimation.propTypes = {
  children: PropTypes.element,
};

export default FormSubmitAnimation;
