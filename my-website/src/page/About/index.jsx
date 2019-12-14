import React from 'react';

// import WorkData from '../../component/WorkData/index/';
import Footer from '../../component/Footer/index';
import Bio from '../../component/Bio';
import './about.scss';

 const About = (props) => {
    console.log(props)
    return(
    
        <div className='about'>
          <div className="bg-img"/>
            <h1 className='lg-text'>
              About  
              <span className="sec-text">
               Me
              </span>
            </h1>
            <h5 className="sm-text">
              let me tell you a few things .....
            </h5> 
           <Bio />
           <Footer />
        </div>
    )
 }

export default About;