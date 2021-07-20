import React from "react";

const Footer = () => {
    return(
        <footer>
        <div className="container margin_120_95">
          <div className="row">
            <div className="col-lg-5 col-md-12 p-r-5">
              <p>
                <img src="assets/img/logo.png" width={149} height={42} alt />
              </p>
              <p>
                Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea.
                Id placerat tacimates definitionem sea, prima quidam vim no. Duo
                nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus
                expetendis vis.
              </p>
              <div className="follow_us">
                <ul>
                  <li>Follow us</li>
                  <li>
                    <a href="#0">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ml-lg-auto">
              <h5>Useful links</h5>
              <ul className="links">
                <li>
                  <a href="#0">Admission</a>
                </li>
                <li>
                  <a href="#0">About</a>
                </li>
                <li>
                  <a href="#0">Login</a>
                </li>
                <li>
                  <a href="#0">Register</a>
                </li>
                <li>
                  <a href="#0">News &amp; Events</a>
                </li>
                <li>
                  <a href="#0">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Contact with Us</h5>
              <ul className="contacts">
                <li>
                  <a href="tel://61280932400">
                    <i className="ti-mobile" /> + 61 23 8093 3400
                  </a>
                </li>
                <li>
                  <a href="mailto:info@udema.com">
                    <i className="ti-email" /> info@udema.com
                  </a>
                </li>
              </ul>
              <div id="newsletter">
                <h6>Newsletter</h6>
                <div id="message-newsletter" />
                <form
                  method="post"
                  action="assets/newsletter.php"
                  name="newsletter_form"
                  id="newsletter_form"
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email_newsletter"
                      id="email_newsletter"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <input
                      type="submit"
                      defaultValue="Submit"
                      id="submit-newsletter"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*/row*/}
          <hr />
          <div className="row">
            <div className="col-md-8">
              <ul id="additional_links">
                <li>
                  <a href="#0">Terms and conditions</a>
                </li>
                <li>
                  <a href="#0">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div id="copy">© Udema</div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;