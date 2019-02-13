import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ApplyGear from '../images/apply.svg';
import DeveloperGear from '../images/developers.svg';
import SponsorsGear from '../images/sponsors.svg';
// import ContactGear from '../images/contact.svg';
// import ClientGear from '../images/clients.svg';
// import InternGear from '../images/interns.svg';
// import SendGear from '../images/send.svg';
import { gearAnimation, gray, elevation } from '../utilities';

const AnimationWrapper = styled.div`
  margin: 1rem auto;
  background: ${gray};
  padding: 1rem;
  ${elevation[2]};
  svg {
    width: 200px;
    cursor: pointer;
    ${gearAnimation};
  }
`;
const GearButtons = () => (
  <AnimationWrapper>
    <Link to="/forms/submitProjectFormPage">
      <ApplyGear />
    </Link>
    <Link to="/forms/getInvolvedFormPage">
      <DeveloperGear />
    </Link>
    <Link to="/forms/sponsorFormPage">
      <SponsorsGear />
    </Link>
  </AnimationWrapper>
);
export default GearButtons;
