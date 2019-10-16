import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
// import './layout.css'
import '../fonts/webfontkit/stylesheet.css';
import { GlobalStyle } from '../utilities';
import Header from './header';
import Footer from './footer';

const LayoutBody = styled.main`
  margin: 0.5rem auto;
  max-width: 960px;
  padding: 0 2rem 1rem;
  color: white;
`;

const Layout = ({ children, pathname }) => (
  <>
    <GlobalStyle />
    {pathname ? (
      <Spring config="slow" from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {style => (
          <div style={style}>
            <Header pathname={pathname} />
          </div>
        )}
      </Spring>
    ) : (
      <Header />
    )}
    <LayoutBody>
      {children}
      <Footer />
    </LayoutBody>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string,
};

export default Layout;
