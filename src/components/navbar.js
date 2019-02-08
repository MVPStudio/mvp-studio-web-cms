import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gray } from '../utilities';

const NavList = styled.ul`
  font-family: 'lulo_cleanone', sans-serif;
  list-style: none;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  padding-bottom: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const NavLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
  transition: 0.5s ease;

  a {
    &:hover,
    &:active {
      background: ${gray};
    }
  }
`;

const ListLink = ({ to, children }) => (
  <NavLi>
    <Link
      to={to}
      activeStyle={{ background: gray, color: 'white' }}
      style={{ color: 'white', textDecoration: 'none', padding: '0.3rem' }}
    >
      {children}
    </Link>
  </NavLi>
);

const Navbar = () => (
  <NavList>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/who-we-are">Who We Are</ListLink>
    <ListLink to="/how-it-works">How It Works</ListLink>
    <ListLink to="/showcase">Showcase</ListLink>
  </NavList>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navbar;
