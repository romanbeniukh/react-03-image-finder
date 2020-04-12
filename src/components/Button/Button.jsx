import React from 'react';
import T from 'prop-types';

const Button = ({ title, page, handler }) => (
  <div className="button-wrap" >
    <button className="button-wrap__btn" onClick={ () => handler(page) }>{ title }</button>
  </div>
);

Button.propTypes = {
  title: T.string.isRequired,
  page: T.number.isRequired,
  handler: T.func.isRequired,
};

export default Button;