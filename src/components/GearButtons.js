import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import GearWrench from '../images/gearWrench.svg';
import GearEnvelope from '../images/gearEnvelope.svg';
import GearHammer from '../images/gearHammer.svg';
import GearNut from '../images/gearNut.svg';
import GearScrew from '../images/gearScrew.svg';
import { gearAnimation, elevation, Line } from '../utilities';

const AnimationWrapper = styled.div`
  margin: 1rem auto;
  text-align: center;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  justify-content: center;
  svg {
    width: 150px;
    cursor: pointer;
    display: block;
    fill: white;
  }
  a {
    ${gearAnimation};
  }
  h3 {
    ${gearAnimation};
    margin: 0;
    font-size: 1.6rem;
  }
`;
const HomeCard = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  background: #00000055;
  ${elevation[2]};
`;

export const ProjectGear = ({ children }) => (
  <HomeCard>
    {children}
    <GearLink to="/forms/submitProjectFormPage" title="Apply">
      <GearEnvelope />
    </GearLink>
  </HomeCard>
);
ProjectGear.propTypes = {
  children: PropTypes.node.isRequired,
};

export const InvolvedGear = ({ children }) => (
  <HomeCard>
    {children}
    <GearLink to="/forms/getInvolvedFormPage" title="Get Involved">
      <GearWrench />
    </GearLink>
  </HomeCard>
);
InvolvedGear.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SponsorGear = ({ children }) => (
  <HomeCard>
    {children}
    <GearLink to="/forms/sponsorFormPage" title="Sponsors">
      <GearHammer />
    </GearLink>
  </HomeCard>
);
SponsorGear.propTypes = {
  children: PropTypes.node.isRequired,
};

const GearLink = ({ title, to, children }) => (
  <AnimationWrapper>
    <Link to={to}>
      {children}
      <h3>{title}</h3>
    </Link>
  </AnimationWrapper>
);
GearLink.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const StyledInternProGears = styled(HomeCard)`
  box-shadow: none;
  cursor: pointer;
  svg {
    width: 150px;
    margin: 0 2rem;
  }
  ${gearAnimation};
`;

export const InternProGears = ({ handleInternOrPro }) => (
  <StyledInternProGears>
    <AnimationWrapper onClick={() => handleInternOrPro('intern')}>
      <GearScrew />
      <h3>Intern</h3>
    </AnimationWrapper>
    <AnimationWrapper>
      <GearNut onClick={() => handleInternOrPro('pro')} />
      <h3>Industry Pro</h3>
    </AnimationWrapper>
    <Line />
  </StyledInternProGears>
);
InternProGears.propTypes = {
  handleInternOrPro: PropTypes.func.isRequired,
};
