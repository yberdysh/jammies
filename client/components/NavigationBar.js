import React, { Component } from 'react';
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
    window.addEventListener('scroll', this.handleScroll)
}

componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
}

// handle onScroll event
handleScroll = () => {
    this.setState({isHide: false})
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

            <div className="navbar-right hidden-xs hidden-sm">
              {this.props.isLoggedIn ? <a onClick={() => this.props.logout()} className="navbar-item navbar-link">Logout</a> : <Link to="/login" onClick={this.login} className="navbar-item navbar-link">Login</Link>}
              {this.props.isLoggedIn ? <a className="navbar-item navbar-link">Orders</a> : <Link to="/signup" onClick={this.signup} className="navbar-item navbar-link">Sign Up</Link>}
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


