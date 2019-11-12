import React from 'react';

import WORKDATA from '../WorkData/index';

import './bio.scss';

 const Bio = ( ) => (
        <div className='bio-graph'>
             <div className="about-info">
              <div className="display-pic">
                <div className="portrait"></div>
              </div>
              <div className="bio">
                <h3 className="text">
                  Bio ...
                </h3>
                <h3 className="bio-text">
                  My name is Olaoye Idris, I'm a Front-End  Developer, currently an intern with DevCareers, I enjoy writing code and love to learn new technologies, outside of writing lines of code, I enjoy hanging out with friends also want to try hiking.
                </h3>
              </div>
            </div>
            <WORKDATA /> 
        </div>
    
 )


export default Bio