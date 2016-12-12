/* eslint-disable max-len */
import React from 'react';
import TechnologyBlock from './TechnologyBlock.jsx';

const Technology = () => {
  return (
    <section id="technology" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 headline wow bounceInDown">
            <h3>Current tech stack of choice</h3>
          </div>
          <div className="col-md-12">
            <div className="row">
              <TechnologyBlock
                icon="fa fa-rocket"
                blockTitle="React"
                blockText="I'm a big fan of React and the React ecosystem.  Coming from the years of Angular 1 and a few POC's with Angular 2, I feel right at home with React and ES6/JSX." />
              <TechnologyBlock
                icon="fa fa-database"
                blockTitle="Redux"
                blockText="This handy little predicatable state container is a simple implementation around strict unidirectional data flow with immutability in mind.  I'll use Redux on every kind of project to maintain frontend state." />
              <TechnologyBlock
                icon="fa fa-telegram"
                blockTitle="Express"
                blockText="The fast, unopinionated, minimalist http framework for Node.  That's about all you need to know about Express to fall inlove with it.  My go-to when creating NodeJs API's and serving up isomorphic frontend applications." />
            </div>
            <div className="row">
              <TechnologyBlock
                icon="fa fa-linux"
                blockTitle="Docker"
                blockText="Can't live without this beautiful whale.  I'm glad that people finally woke up to the container craze.  The hype is real, and containers bring people one step closer to cleaner code with a clean CI process." />
              <TechnologyBlock
                icon="fa fa-code"
                blockTitle="NodeJs"
                blockText="Just about anything Node related is on my radar and I make no qualms about leveraging it to run scripts or build large scale applications.  I've been writing JavaScript for 13 years and I'm glad to see Node take over the world." />
              <TechnologyBlock
                icon="fa fa-check-circle-o"
                blockTitle="Mocha/Chai"
                blockText="I'm a big fan of Continuous Integration and love my testing/assertion libraries.  Current flavor is Mocha/Chai but I keep coming back to Tape from time to time depending on my project." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
