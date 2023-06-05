

import React from 'react';
import PropTypes from 'prop-types';
import HEAD from 'next/head';
import wrapper from '../store/configureStore';
import './category/styles.css';

const BiBi = ( {Component} ) => {
  return (
    <>
    <HEAD>
      <meta charSet="utf-8" />
      <title>BiBi</title>      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Damion&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bitter&family=Merriweather&display=swap" rel="stylesheet"></link>
    </HEAD>
    <Component></Component>
    </>
  );
}

BiBi.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(BiBi);