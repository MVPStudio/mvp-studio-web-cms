import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'

class FormAnimation extends Component {
  state = {
    submitResponse: '',
    formSubmitted: false,
  }
  setFormStateTrue = () => {
    this.setState({ formSubmitted: true })
  }
  setSubmitResponse = submitResponse => {
    this.setState({ submitResponse: submitResponse })
  }

  render() {
    const state = this.state
    return (
      <Transition
        items={this.state.formSubmitted}
        native
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
      >
        {submitted =>
          !submitted
            ? props => (
                <animated.div style={props}>
                  {this.props.children({
                    setFormState: this.setFormStateTrue,
                    setSubmitResponse: this.setSubmitResponse,
                  })}
                </animated.div>
              )
            : props => (
                <animated.h2 style={{ textAlign: 'center', ...props }}>
                  {this.state.submitResponse}
                </animated.h2>
              )
        }
      </Transition>
    )
  }
}

export default FormAnimation
