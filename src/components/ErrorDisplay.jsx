import React from 'react';
import PropTypes from 'prop-types';

//stateless functional component
export const ErrorDisplay = (props) => {
  const currentUser = props.currentUser;
  const message = 'Le champ est obligatoire';
  return (
    <div>
      {currentUser && <small className="text-danger">{message}</small>}
    </div>
  )
}
