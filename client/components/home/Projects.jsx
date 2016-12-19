import React from 'react';
import ProjectDetail from './ProjectDetail.jsx';

// Module load the images via webpack

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 headline wow bounceInDown">
            <h3>Current side projects in the pipeline</h3>
          </div>
        </div>
        <ProjectDetail
          imagePath={require('../../images/projects/olegjs.png')}
          imageDescription="OlegJs Personal Site"
          title="Personal Website - OlegJs"
          description="Peronal website which is built on react, redux, node, etc"
          github="https://github.com/oshalygin/OlegJs"
          travis="https://travis-ci.org/oshalygin/OlegJs"
          codacy="https://www.codacy.com/app/oshalygin/OlegJs/dashboard" />


      </div>
    </section>
  );
};

export default Projects;
