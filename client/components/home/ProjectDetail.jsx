import React, { PropTypes } from 'react';

const imageStyle = {
  width: '85%'
};

const ProjectDetail = ({imagePath, imageDescription, title, description, github, travis, codacy}) => { //eslint-disable-line
  return (
    <div className="row">
      <div className="col-md-12 headline wow bounceInLeft">
        <img
          src={imagePath} //add imagePath
          style={imageStyle}
          alt={imageDescription}
          className="img-responsive center-block" />
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  // leaving these two open in case there isn't a travis build associated to this project or if it's not ready to be open sourced.
  travis: PropTypes.string,
  codacy: PropTypes.string
};


export default ProjectDetail;
