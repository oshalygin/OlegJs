import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <div className="icon">
                            <a href="index.html"><img src="img/logo-white.svg" /></a>
                            <a href="index.html" className="text">JWT Inspector</a>
                        </div>
                        <div className="credits">
                            by
            <a href="https://stormpath.com/" target="_blank">
                                <img src="img/stormpath-logo-white.png" />
                            </a>
                        </div>
                    </div>

                    <div className="share">
                        <a href="https://twitter.com/intent/tweet?text=Inspect%20your%20JWTs%20with%20JWT%20Inspector%20for%20Chrome%20https%3A%2F%2Fjwtinspector.io%20%23jwt" target="_blank" rel="nofollow" className="btn btn-alt">
                            <i className="fa fa-twitter" aria-hidden="true" />
                            Share on Twitter
          </a>
                    </div>

                    <h1>Gain control over your JWTs</h1>

                    <p className="description">
                        JWT Inspector is a browser extension that lets you decode and inspect JSON Web Tokens
          in requests, cookies, and local storage. Also debug any JWT directly from
          the console or in the built-in UI.
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
            <section id="section-1">
                <div className="container feature">
                    <h2>Inspect JWTs everywhere</h2>
                    <p>
                        Find and inspect JWTs in cookies, local storage, and requests.
        </p>
                    <div className="devtools">
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
                            <li>
                                <i className="fa fa-archive" aria-hidden="true" />
                                <span>Storage</span>
                            </li>
                            <li className="selected">
                                <i className="fa fa-paper-plane" aria-hidden="true" />
                                <span>Requests <span className="counter-label">1</span></span>
                            </li>
                        </ul>
                        <ul className="devtools-filters">
                            <li>
                                <i className="fa fa-check-square" aria-hidden="true" />
                                <span>Current page</span>
                            </li>
                            <li>
                                <i className="fa fa-square" aria-hidden="true" />
                                <span>Preserve log</span>
                            </li>
                            <li>
                                <i className="fa fa-filter" aria-hidden="true" />
                                <span>Filter</span>
                                <span className="text-placeholder" />
                            </li>
                        </ul>
                        <table className="devtools-table jwt-requests">
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Url</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GET</td>
                                    <td>http://localhost/?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
                                    .eyJzdWIiOiJmZjg5NjU1Ny0yMzgyLTRkN
                                    mUtYWJkOC1hMDFhOTFhYmQ5NGYiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpc19hZG1pbiI6dHJ1ZX0.
                                    _lYAdmfszpyfbqWUeCC4LkfWbltC3uF29FiSPaHTJ70</td>

                                    <td>200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="section-2" className="section-bg">
                <div className="container feature left">
                    <h2>Easily debug JWTs</h2>
                    <p>
                        Paste a JWT and decode its header, payload, and signature.
        </p>
                    <div className="devtools">
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
                            <li className="selected">
                                <i className="fa fa-bug" aria-hidden="true" />
                                <span>Debug</span>
                            </li>
                            <li>
                                <i className="fa fa-circle" aria-hidden="true" />
                                <span>Cookies</span>
                            </li>
                            <li>
                                <i className="fa fa-archive" aria-hidden="true" />
                                <span>Storage</span>
                            </li>
                            <li>
                                <i className="fa fa-paper-plane" aria-hidden="true" />
                                <span>Requests</span>
                            </li>
                        </ul>
                        <div className="devtools-jwt-debug">
                            <div className="devtools-jwt-encoded">
                                <div className="devtools-jwt-header">
                                    <span>Encoded</span>
                                </div>
                                <div className="textarea-placeholder">
                                    <span className="jwt-header-color">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</span><span>.</span>
                                    <span
                                        className="jwt-payload-color">
                                        Some JWT
                                        </span>
                                    <span>.</span>
                                    <span
                                        className="jwt-signature-color">_lYAdmfszpyfbqWUeCC4LkfWbltC3uF29FiSPaHTJ70</span>
                                    <span className="cursor blink" />
                                </div>
                            </div>
                            <div className="devtools-jwt-decoded">
                                <div className="devtools-jwt-details">
                                    <div className="devtools-jwt-header">
                                        <span>Decoded</span>
                                    </div>
                                    <div className="devtools-section">
                                        <div className="devtools-section-title">
                                            <i className="fa fa-caret-down" aria-hidden="true" />
                                            Header
                  </div>
                                        <div className="devtools-section-content">
                                            <pre className="json">
                                                <span className="line" />
                                            </pre>
                                        </div>
                                    </div>
                                    <div className="devtools-section">
                                        <div className="devtools-section-title">
                                            <i className="fa fa-caret-down" aria-hidden="true" />
                                            Payload
                  </div>
                                        <div className="devtools-section-content" />

                                    </div>
                                    <div className="devtools-section">
                                        <div className="devtools-section-title">
                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                            Signature
                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-3">
                <div className="container feature">
                    <h2>Debug JWTs with the console</h2>
                    <p>
                        Use <code>console.jwt()</code> to decode and dump a JWT to the console.
        </p>
                    <div className="devtools">
                        <div className="devtools-header">
                            <div className="devtools-icons" />
                            <ul className="devtools-menu">
                                <li>Elements</li>
                                <li className="selected">Console</li>
                                <li>Sources</li>
                                <li>Network</li>
                                <li>Timeline</li>
                                <li>Profiles</li>
                                <li>Resources</li>
                                <li>Security</li>
                                <li>Audits</li>
                                <li>JWT</li>
                            </ul>
                            <div className="devtools-close">
                                <i className="fa fa-times" aria-hidden="true" />
                            </div>
                            <div className="devtools-console">
                                <div className="devtools-console-line" />

                                <div className="devtools-console-line output" />

                                <div className="devtools-console-line input">
                                    <span className="cursor blink" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="copyright">
                        &copy; 2016 Stormpath
        </div>
                    <div className="social">
                        <a href="https://twitter.com/gostormpath"
                            target="_blank" rel="nofollow"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="https://github.com/stormpath/jwt-inspector"
                            target="_blank" rel="nofollow"><i className="fa fa-github-alt" aria-hidden="true" /></a>
                    </div>
                    <div className="love">
                        <a href="https://stormpath.com" target="_blank">
                            <span>Made with</span><i className="fa fa-heart heart" aria-hidden="true" /><span>by Stormpath</span>
                        </a>
                    </div>
                </div>
            </footer>
            <div id="modal-firefox" className="modal">
                <div className="modal-content">
                    <div className="close" onClick="hideModal()" title="Close">&times;</div>
                    <h4>It's not ready for Firefox just yet...</h4>
                    <p>
                        It's currently only available for Chrome. But enter your email address
          to get notified when it comes to Firefox. Each subscription will make us
          work a little harder.
        </p>
                    <form action="https://forms.hubspot.com/uploads/form/v2/475298/a1f040a9-360a-4f82-a7fa-a88cc1bf4138" encType="multipart/form-data" method="POST" onSubmit="onSubmitForm(this)">
                        <input name="email" type="email" className="input" placeholder="Your email address" required />
                        <button type="submit" className="btn colored">Get notified</button>
                        <p className="small">
                            We won't send you any spam, we promise!
          </p>
                    </form>
                    <p className="thanks">
                        Thank you <i className="fa fa-heart-o heart" aria-hidden="true" />
                    </p>
                </div>
            </div>
            <div id="modal-safari" className="modal">
                <div className="modal-content">
                    <div className="close" onClick="hideModal()" title="Close">&times;</div>
                    <h4>It's not ready for Safari just yet...</h4>
                    <p>
                        It's currently only available for Chrome. But enter your email address
          to get notified when it comes to Safari. Each subscription will make us
          work a little harder.
        </p>
                    <form
                        action="https://forms.hubspot.com/uploads/form/v2/475298/815630c0-c0af-4fe5-b21d-a23432625135"
                        encType="multipart/form-data" method="POST"
                        onSubmit="onSubmitForm(this)">

                        <input name="email" type="email" className="input" placeholder="Your email address" required />
                        <button type="submit" className="btn colored">Get notified</button>
                        <p className="small">
                            We won't send you any spam, we promise!
          </p>
                    </form>
                    <p className="thanks">
                        Thank you <i className="fa fa-heart-o heart" aria-hidden="true" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
