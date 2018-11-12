import React, { Component } from 'react';

export class NavigationBar extends Component {
  render() {
    return (
        <div className
      ="navbar-wagon">
          <a href="/" className
        ="navbar-wagon-brand">
            <img src="../public/jam-logo.png" alt="logo"/>
          </a>


          <div className
        ="navbar-wagon-right hidden-xs hidden-sm">

            <a href="" className
          ="navbar-wagon-item navbar-wagon-link">Host</a>
            <a href="" className
          ="navbar-wagon-item navbar-wagon-link">Trips</a>
            <a href="" className
          ="navbar-wagon-item navbar-wagon-link">Messages</a>


            <div className
          ="navbar-wagon-item">
              <div className
            ="dropdown">
                <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" className
              ="avatar dropdown-toggle" id="navbar-wagon-menu" data-toggle="dropdown"/>
                <ul className
              ="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className
        ="navbar-wagon-item hidden-md hidden-lg">
            <div className
          ="dropdown">
              <i className
            ="fas fa-bars dropdown-toggle" data-toggle="dropdown" role="button"></i>
              <ul className
            ="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
                <li><a href="#">Host</a></li>
                <li><a href="#">Trips</a></li>
                <li><a href="#">Messagese</a></li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
