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
              <Link className='link' to='#'>
               <FontAwesomeIcon  icon={faFacebookSquare} size='lg'/>
              </Link>
              <Link className='link' to='#'>
                <FontAwesomeIcon  icon={faGithub} size='lg'/>
              </Link>
              <Link className='link' to=''>
                <FontAwesomeIcon  icon={faLinkedin} size='lg'/>
              </Link>
              <Link className='link' to=''>
                <FontAwesomeIcon  icon={faTwitter} size='lg'/>
              </Link>
            </div>
            </div>
        </div>
    
 )


export default Homepage;