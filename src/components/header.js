import { Link } from 'gatsby';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { red, elevation } from '../utilities';
import MVPLogo from '../images/mvp-logo-white.svg';
import Navbar from './navbar';
import GearButtons from './GearButtons';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-around;
  background: ${red};
  ${elevation[2]};

  ${({ home }) =>
    home &&
    css`
      height: 100vh;
      align-content: center;
      grid-template-columns: 1fr;

      @media only screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        height: auto;
      }
    `}
`;
const StyledLogo = styled(MVPLogo)`
  max-height: 40vh;
  margin: 1rem;
`;

class Header extends Component {
  render() {
    const { pathname } = this.props;
    const homeHeader = pathname && 'homeHeader';
    return (
      <StyledHeader home={homeHeader}>
        <Link to="/">
          <StyledLogo />
        </Link>
        {homeHeader && <GearButtons />}
        <Navbar />
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  pathname: PropTypes.string,
};

Header.defaultProps = {
  pathname: ``,
};

export default Header;
