import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ApplyGear from '../images/apply.svg';
import DeveloperGear from '../images/developers.svg';
import SponsorsGear from '../images/sponsors.svg';
// import ContactGear from '../images/contact.svg';
// import ClientGear from '../images/clients.svg';
import InternGear from '../images/interns.svg';
// import SendGear from '../images/send.svg';
import { gearAnimation, gray, elevation } from '../utilities';

const AnimationWrapper = styled.div`
  margin: 1rem auto;
  background: ${gray};
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-items: center;
  max-width: 550px;
  background: #00000055;
  ${elevation[2]};
  svg {
    width: 150px;
    cursor: pointer;
    ${gearAnimation};
    display: block;
  }
`;
export const HomeGears = () => (
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

export const ProjectGear = ({ children }) => (
  <AnimationWrapper>
    {children}
    <Link to="/forms/submitProjectFormPage">
      <ApplyGear />
    </Link>
  </AnimationWrapper>
);

export const InvolvedGear = ({ children }) => (
  <AnimationWrapper>
    {children}
    <Link to="/forms/getInvolvedFormPage">
      <DeveloperGear />
    </Link>
  </AnimationWrapper>
);

export const SponsorGear = ({ children }) => (
  <AnimationWrapper>
    {children}
    <Link to="/forms/sponsorFormPage">
      <SponsorsGear />
    </Link>
  </AnimationWrapper>
);

const AnimatedInternProGears = styled(AnimationWrapper)`
  box-shadow: none;
  svg {
    width: 150px;
    margin: 0 2rem;
  }
`;

export const InternProGears = ({ handleInternOrPro }) => (
  <AnimatedInternProGears style={{ boxShadow: 'none' }}>
    <InternGear onClick={() => handleInternOrPro('intern')} />
    <DeveloperGear onClick={() => handleInternOrPro('pro')} />
    <hr />
  </AnimatedInternProGears>
);
InternProGears.propTypes = {
  handleInternOrPro: PropTypes.func.isRequired,
};
