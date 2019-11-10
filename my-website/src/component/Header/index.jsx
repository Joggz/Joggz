import React from 'react';

import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import './header.scss';



class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      addClose: false,
      addShow: false
    }
  }

  toggle = () => {
    this.setState({
      addClose: !this.state.addClose,
      addShow: !this.state.addShow
    })
  }


  render(){

     let closeClass = ['menu-btn'];
      let showClass = [];

    if(this.state.addClose){
      closeClass.push('close')
    }

    if(this.state.addShow){
      showClass.push('show')
    }

    return(
      <div className='header'> 
      <div className={`${closeClass.join(' ')}`} onClick={this.toggle}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className={`${showClass.join(' ')} menu`} >
        <div className={`${showClass.join(' ')} display-pic`}>
          <div className={`${showClass.join(' ')} portrait`}></div>
        </div>
        <ul className={`${showClass.join(' ')} menu-nav`}>
          <li className={`${showClass.join(' ')} nav-item current`}>
            <Link className='item' to=''>Home</Link>
          </li>
          <li className={`${showClass.join(' ')} nav-item`}>
            <Link className='item' to=''>About Me</Link>
          </li>
          <li className={`${showClass.join(' ')} nav-item`}>
            <Link className='item' to=''>My Work</Link>
          </li>
          <li className={`${showClass.join(' ')} nav-item`}>
            <Link className='item' to=''>How to reach me</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
  }
       
}


export default  Header;