import React from 'react';
import PropTypes from 'prop-types';

function Main({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Main;
