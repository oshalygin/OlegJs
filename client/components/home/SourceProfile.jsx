import React from 'react';

const SourceProfile = () => {
  return (
    <section id="profile-contact">
      <div className="container">
        <div className="row">
          <div id="application" />
          <div className="col-sm-4 wow bounceInLeft">
            <div className="profile-item text-center">
              <i className="fa fa-envelope-o" />
              <h5><a href="index.html#">oshalygin @gmail.com</a></h5>
            </div>
          </div>
          <div className="col-sm-4 wow bounceInUp">
            <div className="profile-item text-center">
              <i className="fa fa-github" />
              <h5><a href="https://github.com/oshalygin">GitHub</a></h5>
            </div>
          </div>
          <div className="col-sm-4 wow bounceInRight">
            <div className="profile-item text-center">
              <i className="fa fa-twitter" />
              <h5><a href="https://twitter.com/oshalygin">Twitter</a></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourceProfile;
