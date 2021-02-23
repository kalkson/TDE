import React from 'react';
import propTypes from 'prop-types';
import GlobalStyle from '../styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

MyApp.propTypes = {
  Component: propTypes.oneOfType([propTypes.string, propTypes.func]).isRequired,
  pageProps: propTypes.shape(),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
