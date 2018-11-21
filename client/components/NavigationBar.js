import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Signup} from './auth-form';
import {Modal} from './Modal';
import {logout} from '../store'

class NavigationBar extends Component {
  constructor(){
    super()
    this.state = {
      isHide: true,
      showTheModal: false,
      signup: false,
      login: false
    }
  }

  showModal = () => {
    this.setState({ showTheModal: true });
  };

  hideModal = (whichModal) => {
    this.setState({ showTheModal: false });
    if (whichModal === "login"){
      this.setState({login: false})
    } else {
      this.setState({signup: false})
    }
  };

  login = () => {
    this.setState({login: true})
    this.showModal()
  }

  signup = () => {
    this.setState({signup: true})
    this.showModal()
  }


componentDidMount = () => {
    // if (this.props.match.path === "/jams"){
    //   this.setState({isHide: true})
    // } else {
    //   this.setState({isHide: false})
    // }
    // use this instead: window.location.href
    window.addEventListener('scroll', this.handleScroll)
}

componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
}

// handle onScroll event
handleScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.setState({isHide: false})
    } else {
        this.setState({isHide: true})
    }
  // console.log(this.state.isHide)
  //   const hidden = this.state.isHide
  //   this.setState({isHide: !hidden})
      // considering removing this set timeout due to modal dissappearing, () => setTimeout(() => this.setState({isHide: true}), 10000))
}

    render(){
      if (this.state.isHide){
          return <div></div>
      } else {
          return (
            <div className="navigation sticky">
            <a href="/" className="navbar-logo">
              <img src="https://static.thenounproject.com/png/215294-200.png" alt="logo"/>
            </a>

            <div className="navbar-right">
              {this.props.isLoggedIn ? <a onClick={() => this.props.logout()} className="navbar-item navbar-link">Logout</a> : <a onClick={this.login} className="navbar-item navbar-link">Login</a>}
              {this.props.isLoggedIn ? <a className="navbar-item navbar-link">Orders</a> : <a onClick={this.signup} className="navbar-item navbar-link">Sign Up</a>}
              <Link to="/jams" className="navbar-item navbar-link">All Jams</Link>
              <button type="button" className="shopping-cart-btn">&#128722; Cart</button>
            </div>
          {this.state.showTheModal &&
            <Modal login={this.state.login} signup={this.state.signup} show={this.state.showTheModal} handleClose={this.hideModal}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>}
          </div>
          );
        }
    }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)


