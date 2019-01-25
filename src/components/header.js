import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { red, elevation } from '../utilities'
import MVPLogo from '../images/mvp-logo-white.svg'

const StyledHeader = styled.header`
  background: ${red};
  padding-bottom: 1.45rem;
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
  </StyledHeader>
)

export default Header
