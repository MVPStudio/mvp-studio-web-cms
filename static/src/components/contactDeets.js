import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocMedLink = ({ to, children }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

SocMedLink.propTypes = {
  to: PropType.string.isRequired,
  children: PropType.node.isRequired,
};

const StyledContactDeets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1rem;
  }
  a {
    padding: 0.5rem;
    font-size: 2rem;
  }
`;

const ContactDeets = () => (
  <StyledContactDeets>
    <p>44 W Broadway, Eugene, OR 97401 |</p>
    <SocMedLink to="https://www.facebook.com/mvpstudiooregon/">
      <FaFacebook />
    </SocMedLink>{' '}
    <SocMedLink to="https://www.instagram.com/mvpstudiooregon/?hl=en">
      <FaInstagram />
    </SocMedLink>
  </StyledContactDeets>
);

export default ContactDeets;
