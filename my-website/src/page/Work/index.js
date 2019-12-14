import React, { Component } from 'react'

import './work.scss';

class Work extends Component {
  constructor(){
    super()

    this.state = {

    }
  }

    render() {
        return (
            <div className='work'>
                <div className='bg-img'/>
                <h2>my <span className='sec-text'>work</span></h2>
                <h3 className='txt'> check out some of my project...</h3>
                <h2>COMING SOON ....</h2>
            </div>
        )
    }
}


export default Work