/* eslint-disable max-len */
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <div className="icon">
                        <a href="index.html"><img src={require('../../images/logo-white.png')} /></a>
                    </div>
                </div>
                <div className="share">
                    <a href="https://twitter.com/intent/tweet?text=Wow%20this%20is%20a%20really%20neat%20site!!%20www.OlegJs.com%20%23olegjs" target="_blank" rel="nofollow" className="btn btn-alt">
                        <i className="fa fa-twitter" aria-hidden="true" />
                        Share on Twitter
                    </a>
                </div>

                <h1>Oleg Shalygin</h1>
                <p className="description">
                    Passionate, creative, professional, and always learning.
                </p>
                <p className="buttons">
                    <a href="index.html#" className="btn chrome" onClick="chrome.webstore.install(); return false;">
                        <i className="fa fa-chrome" aria-hidden="true" />
                        Add to Chrome
          </a>

                    <a href="index.html#" className="btn firefox" onClick="showModal('firefox'); return false;">
                        <i className="fa fa-firefox" aria-hidden="true" />
                        Add to Firefox
          </a>

                    <a href="index.html#" className="btn safari" onClick="showModal('safari'); return false;">
                        <i className="fa fa-safari" aria-hidden="true" />
                        Add to Safari
          </a>

                    <a href="https://github.com/stormpath/jwt-inspector" target="_blank" rel="nofollow" className="btn btn-alt">
                        <i className="fa fa-github" aria-hidden="true" />
                        View on GitHub
          </a>

                    <a href="index.html#" className="btn btn-install fixed hidden chrome" onClick="chrome.webstore.install(); return false;">
                        <i className="fa fa-chrome" aria-hidden="true" />
                        Add to Chrome
          </a>
                    <a href="index.html#" className="btn btn-install fixed hidden firefox" onClick="showModal('firefox'); return false;">
                        <i className="fa fa-firefox" aria-hidden="true" />
                        Add to Firefox
          </a>
                    <a href="index.html#" className="btn btn-install fixed hidden safari" onClick="showModal('safari'); return false;">
                        <i className="fa fa-safari" aria-hidden="true" />
                        Add to Safari
          </a>
                </p>

                <p className="small chrome">
                    Soon also available for Firefox and Safari.
        </p>
                <p className="small firefox">
                    Currently only available for Chrome. Click the <em>Add to Firefox</em> button
          above to get notified when it comes to Firefox.
        </p>
                <p className="small safari">
                    Currently only available for Chrome. Click the <em>Add to Safari</em> button
          above to get notified when it comes to Safari.
        </p>

                <div className="devtools animated slideInUp">
                    <div className="devtools-shadow animated fadeIn" />
                    <div className="devtools-header">
                        <div className="devtools-icons" />
                        <ul className="devtools-menu">
                            <li>Elements</li>
                            <li>Console</li>
                            <li>Sources</li>
                            <li>Network</li>
                            <li>Timeline</li>
                            <li>Profiles</li>
                            <li>Resources</li>
                            <li>Security</li>
                            <li>Audits</li>
                            <li className="selected">JWT</li>
                        </ul>
                        <div className="devtools-close">
                            <i className="fa fa-times" aria-hidden="true" />
                        </div>
                    </div>
                    <ul className="devtools-jwt-menu">
                        <li>
                            <i className="fa fa-bug" aria-hidden="true" />
                            <span>Debug</span>
                        </li>
                        <li>
                            <i className="fa fa-circle" aria-hidden="true" />
                            <span>Cookies</span>
                        </li>
                        <li className="selected">
                            <i className="fa fa-archive" aria-hidden="true" />
                            <span>Storage <span className="counter-label">3</span></span>
                        </li>
                        <li>
                            <i className="fa fa-paper-plane" aria-hidden="true" />
                            <span>Requests</span>
                        </li>
                    </ul>
                    <ul className="devtools-filters">
                        <li>
                            <i className="fa fa-check-square" aria-hidden="true" />
                            <span>Current page</span>
                        </li>
                        <li>
                            <i className="fa fa-filter" aria-hidden="true" />
                            <span>Filter</span>
                            <span className="text-placeholder" />
                        </li>
                    </ul>

                    <div className="devtools-content">
                        <table className="devtools-table open">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>auth.token</td>
                                </tr>
                                <tr>
                                    <td>jwt</td>
                                </tr>
                                <tr className="selected">
                                    <td>token</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="devtools-jwt-details">
                            <div className="devtools-jwt-header">
                                <div className="devtools-close">
                                    <i className="fa fa-times" aria-hidden="true" />
                                </div>
                                <span>token</span>
                            </div>
                            <div className="devtools-section">
                                <div className="devtools-section-title">
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                    JWT
                </div>
                                <div className="devtools-section-content">
                                    <span className="jwt">
                                        eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
                                            .eyJzdWIiOiJmZjg5NjU1N
                                            y0yMzgyLTRkNmUtYWJkOC1hMDFhOTFhYmQ5NGYiLCJlbWFpbCI6
                                            ImpvaG5AZXhhbXBsZS5jb20iLCJpc19hZG1pbiI6dHJ1ZX0
                                            ._lYAdmfszpyfbqWUeCC4LkfWbltC3uF29FiSPaHTJ70
                  </span>
                                </div>
                            </div>
                            <div className="devtools-section">
                                <div className="devtools-section-title">
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                    Header
                </div>
                                <div className="devtools-section-content" />
                            </div>
                            <div className="devtools-section">
                                <div className="devtools-section-title">
                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                    Payload
                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
