import { Link } from 'gatsby';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { red, elevation } from '../utilities';
import MVPLogo from '../images/logo.svg';
import Navbar from './navbar';
import { HomeGears } from './GearButtons';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-around;
  background: ${red};
  ${elevation[2]};
  box-shadow: inset 0px 0px 136px 0px rgba(0, 0, 0, 0.75);
  height: 150px;

  ${({ home }) =>
    home &&
    css`
      height: 50vh;
      align-content: center;
      grid-template-columns: auto;

      svg {
        height: 30vh;
      }

      @media only screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        height: auto;
      }
    `}
`;
const StyledLogo = styled(MVPLogo)`
  height: 120px;
  margin: 1rem auto;
  display: grid;
  fill: white;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.75));
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
        {/* {homeHeader && <HomeGears />} */}
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
