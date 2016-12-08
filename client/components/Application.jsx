import React, { PropTypes } from 'react';

const Application = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

Application.propTypes = {
  children: PropTypes.element
};

export default Application;
