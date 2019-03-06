import React, { useState } from 'react';
import styled from 'styled-components';
import FormSubmitAnimation from '../forms/formSubmitAnimation';
import FooterContactForm from '../forms/footerContactForm';
import { red, Line } from '../utilities';

const ContactButton = styled.button`
  color: ${red};
  text-decoration: underline;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
`;

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  text-align: center;
`;

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Line />
      <StyledFooter>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        {showForm ? (
          <FormSubmitAnimation>
            {({ setFormState, setSubmitResponse }) => (
              <FooterContactForm
                setFormState={setFormState}
                setSubmitResponse={setSubmitResponse}
              />
            )}
          </FormSubmitAnimation>
        ) : (
          <ContactButton
            type="button"
            onClick={() => setShowForm(true)}
            onKeyDown={() => setShowForm(true)}
          >
            Contact Us
          </ContactButton>
        )}
      </StyledFooter>
    </>
  );
};

export default Footer;
