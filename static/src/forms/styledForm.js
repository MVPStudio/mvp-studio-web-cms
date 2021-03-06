import styled from 'styled-components';
import { Form } from 'formik';
import { elevation, gray, red } from '../utilities';

const StyledForm = styled(Form)`
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  label {
    max-width: 100%;
    margin: 0.5rem;
    text-align: left;
  }
  label,
  input,
  textarea,
  button {
    font-size: 1.25rem;
  }

  input,
  textarea {
    width: 100%;
    font-family: inherit;
    padding: 0.5rem;
    ${elevation[2]};
    margin-top: 0.25rem;
  }
  .select {
    /* Styles react-select */
    color: ${gray};
  }
  .checkbox-label {
    display: grid;
    justify-content: flex-start;
  }
  .checkbox {
    box-shadow: none;
    transform: scale(1.5);
  }
  .invalid {
    background: #f66;
  }
  input:focus {
    outline-color: ${red};
  }
  button {
    margin: 0 auto;
    width: 250px;
    background: #2b2b2b;
    border: none;
    height: 3rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px #333;
    color: white;
    cursor: pointer;
    font-family: inherit;
    transition: 0.2s;
    :hover {
      box-shadow: 0px 5px 10px #000;
      transform: translate(0, -2px);
    }
    :disabled {
      background-color: #aaa;
    }
  }
`;

export default StyledForm;
