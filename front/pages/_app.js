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
    </HEAD>
    <Component></Component>
    </>
  );
}

BiBi.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

// high order 컴포넌트로 감싸줌
export default wrapper.withRedux(BiBi);