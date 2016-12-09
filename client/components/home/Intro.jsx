import React from 'react';

const Intro = () => {
  return (
    <section id="intro" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="icon">
              <a href="index.html"><img className="logo" src={require('../../images/white.png')} /></a>
            </div>
            <div className="hello wow bounceInDown">
              <h1 className="header-text">Oleg Shalygin</h1>
              <h3><span className="rotate">#NodeJs | #TDD | #NOSQL | #ReactJs</span></h3>
            </div>
            <div className="mouse-icon">
              <div className="wheel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
