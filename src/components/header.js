import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { red, elevation } from '../utilities'
import MVPLogo from '../images/mvp-logo-white.svg'
import Navbar from './navbar';

const StyledHeader = styled.header`
  background: ${red};
  ${elevation[2]}
`
const StyledLogo = styled(MVPLogo)`
  max-height: 40vh;
  margin: 1rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo />
    </Link>
    <Navbar />
  </StyledHeader>
)

export default Header
