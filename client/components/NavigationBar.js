import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Signup} from './auth-form'
import {Modal} from './Modal'
import ReactDOM from "react-dom";

export default class NavigationBar extends Component {
  constructor(){
    super()
    this.state = {
      isHide: false,
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


// componentDidMount = () => {
//     window.addEventListener('scroll', this.handleScroll)
// }

// componentWillUnmount = () => {
//     window.removeEventListener('scroll', this.handleScroll)
// }

// handle onScroll event
// handleScroll = () => {
//     this.setState({isHide: false}, () => setTimeout(() => this.setState({isHide: true}), 10000))
// }

    render(){
      if (this.state.isHide){
          return <div></div>
      } else {
          return (
            <div>
            <a href="/" >
              <img src="https://static.thenounproject.com/png/215294-200.png" alt="logo"/>
            </a>

            <div >
              <a onClick={this.login} >Login</a>
              <a onClick={this.signup} >Sign Up</a>
              <Link to="/jams">All Jams</Link>
              <button type="button" >&#128722; Cart</button>
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


// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<NavigationBar />, container);
