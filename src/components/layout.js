import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
//import './layout.css'
import '../fonts/webfontkit/stylesheet.css'
import { GlobalStyle, gray } from '../utilities'

const LayoutBody = styled.main`
  margin: .5rem auto;
  max-width: 960px;
  padding: 0 2rem 1rem;
  color: white;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <LayoutBody>
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </LayoutBody>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
