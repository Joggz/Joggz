import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faEnvelope,
  faMobile
} from "@fortawesome/free-solid-svg-icons";

import "./contact.scss";

const Contact = () => (
  
    <div className="img-icon">
      <div className="i">
        <div className="portrait" />
        <div className="icons">
          <a href="" className="link">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/idris-olaoye-963459156/"
            className="link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a href="https://twitter.com/laoye_jnr" className="link">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <h5 className="name">olaoye idris</h5>
        <div className="main3">
          <section className="detail">
            <FontAwesomeIcon className='user' icon={faUser} size="lg" />
            <h4>frontend Developer</h4>
          </section>
          <section className="detail">
            <FontAwesomeIcon className='env'icon={faEnvelope} size="lg" />
            <h4>idrisaboladeo@gmail.com</h4>
          </section>
          <section className="detail">
            <FontAwesomeIcon className='phone' icon={faMobile} size="lg" />
            <h4>+234-0706-276-7830</h4>
          </section>
        </div>
      </div>
    </div>
  
);

export default Contact;
