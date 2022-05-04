import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import {withRouter} from "react-router"

import Navigation from './Nav-bar-menu';



const NavComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className='nav-link-wrapper'>
        <NavLink to={route} activeClassName='nav-link-active'>
          {linkText}
        </NavLink>
      </div>
    )
  };
  const onClickMenu = () => {
    return (
      <div className='onClick-menu'>
        <Navigation/>
      </div>
    )
  }



  // const signOut = () => {
  //   props.handleSuccessfulLogout();
  //   props.history.push('/')
  // };


  return (
    <React.StrictMode>
      <div className='nav-bar'>
        <div className='nav-bar-logo'>
          <h2> GPR </h2>
        </div>
        <div className='nav-bar-icon'>
          <FontAwesomeIcon icon="fa-solid fa-helmet-safety" />
        </div>
        <div className='nav-bar-wrapper'>

          {dynamicLink("/", "Home")}
          {dynamicLink("/about", "About")}
          {dynamicLink("/contact", "Contact")}


          {/* {
            props.loginStatus === "Logged_In" ? (
              dynamicLink("/bloghome/user", "Blogs") 
            ) : null
          } */}

        </div>
        {onClickMenu()}
        {/* <div className='nav-bar-menu-icon'>
          <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
        </div> */}


        {/* <div className='nav-bar-active-hover' >
          <div className='nav-bar-active-wrapper'>
            <h3>Services</h3>
            <ul className='nav-bar-active-menu'>
              <li> <a>Concrete</a> </li>
              <li> <a>Demolition</a> </li>
              <li> <a>Projects</a> </li>
              <li> <a>Shortcrete</a> </li>
            </ul>
          </div>
        </div> */}


          {/* {
            props.loginStatus === "Logged_In" ? (
              <a onClick={signOut} className='sign-out-wrapper'> 
                Sign out
                <FontAwesomeIcon icon="sign-out-alt" />
              </a>
            ) : null
          } */}


      </div>
    </React.StrictMode>  
  )
};

export default withRouter(NavComponent);