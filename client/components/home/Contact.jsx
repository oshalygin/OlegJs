import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md-12 headline wow bounceInLeft'>
            <h2>Reach out</h2>
          </div>
          <div className='col-md-12 wow bounceInUp'>
            <p>Feel free to reach out and collaborate on GitHub.</p>
            <ul className='icon-list'>
              <li><i className='fa fa-github-alt' /><a href='https://github.com/oshalygin'>GitHub Projects</a></li>
              <li><i className='fa fa-fw fa-envelope-o' /><a href='mailto:oshalygin@gmail.com'>Contact Oleg</a></li>
              <li><i className='fa fa-twitter' /><a href="https://twitter.com/oshalygin">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
