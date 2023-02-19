import React from 'react';
import PropTypes from 'prop-types';

export const ElementoLista = ({text}) => {
  return (
    <li className='list-group-item'>{text}</li>
  )
}

ElementoLista.propTypes = {
  text: PropTypes.string.isRequired
}