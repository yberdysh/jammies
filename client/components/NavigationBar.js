import React, { Component } from 'react';
import { CSSTransition, transit } from "react-css-transition";

export default class NavigationBar extends Component {
  constructor(){
    super()
    this.state = {
      isHide: true
    }
  }

  handleScroll = (event) =>  {
  // console.log('the scroll things', event)
};

    // showBar = () => {
    //   console.log("triggered")
    //    const { isHide } = this.state
    //    console.log("window.scrollY", window.scrollY)
    //    window.scrollY > this.prev ?
    //    !isHide && this.setState({ isHide: true })
    //    :
    //    isHide && this.setState({ isHide: false });

    //    this.prev = window.scrollY;
    //   this.setState({isHide: false})
    // }



componentDidMount = () => {
   // hadling cover parallax
    window.addEventListener('scroll', this.handleMouseMove)
}

componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleMouseMove)
}

// handle onScroll event
handleMouseMove = () => {
  // e.stopPropogation()
    // console.log(this.coverRef.current.height)
    // console.log("they see me rolling")
    this.setState({isHide: false}, () => setTimeout(() => this.setState({isHide: true}), 5000))
    // const wScroll = window.scrollY
    // this.coverGradRef.current.style.cssText = `transform: translate(0px , -${wScroll/40}%)`
    // console.log(window.scrollY)
}

    render(){
      // console.log("STATE Hide", this.state.isHide)
      if (this.state.isHide){
        return <div></div>
      } else {
        return (<div className="navbar sticky">

          <a href="/" className
        ="navbar-logo">
            <img src="https://static.thenounproject.com/png/215294-200.png" alt="logo"/>
          </a>


          <div className
        ="navbar-right hidden-xs hidden-sm">

            <a href="" className
          ="navbar-item navbar-link">Login</a>
            <a href="" className
          ="navbar-item navbar-link">Sign Up</a>
            <a href="" className
          ="navbar-item navbar-link">All Jams</a>
            <button className="shopping-cart-btn">&#128722; Cart</button>
          </div>
        </div>);
}
    }
}
