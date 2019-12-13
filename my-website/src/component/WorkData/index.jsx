import React, { Component } from 'react'

import './work.scss';
import Layout from '../WorkLayout/index';
import WORK_DATA from './WORK_DATA'
// import { workerData } from 'worker_threads'

 class WorkData extends Component {
   constructor(){
     super()

     this.state = {
       work: WORK_DATA
      ,
     }
   }
    render() {
        return (
            <div className='data'>
                {this.state.work.map(({id, ...otherPropsItem}) => (
                  <Layout key={id} {...otherPropsItem} />
                ))}
            </div>
        )
    }
}


export default WorkData;