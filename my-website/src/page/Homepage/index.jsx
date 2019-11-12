import React from 'react'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Homepage.scss';


 const Homepage = () => (
        <div className='main'>
          <div className='bg-img'/>
          <div className="info">
            <h1 className='lg-text'>
                OLAOYE 
               <span className='sec-text'>
                    IDRIS
                </span>
            </h1>
            <p className="sm-text  anim-typewriter">
              Web Developer, Front-End Developer, Programmer.
            </p>
            <div className="icons">
              <a href="" className='link'>
                <FontAwesomeIcon  icon={faFacebookSquare} size='lg'/>
              </a>
              {/* <a href="" className='link'>
                <FontAwesomeIcon  icon={faGithub} size='lg'/>
              </a> */}
              <a href="https://www.linkedin.com/in/idris-olaoye-963459156/" className='link'>
                  <FontAwesomeIcon  icon={faLinkedin} size='lg'/>
              </a>
              <a href="https://twitter.com/laoye_jnr" className='link'>
                  <FontAwesomeIcon  icon={faTwitter} size='lg'/>
              </a>
             
            </div>
            </div>
        </div>
    
 )


export default Homepage;