import React, { Component } from 'react';

export class Banner extends Component {
  smoothScroll = () => {
    document.querySelector('.container').scrollIntoView({
      block: "start",
      behavior: 'smooth'
    });
  }

// original: https://images.unsplash.com/photo-1524010235651-6318320e3276?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=51197f4636e1eb391a1820569406f120&auto=format&fit=crop&w=1950&q=80
// https://assets.epicurious.com/photos/57978afdbd7fde737c837759/2:1/w_1260%2Ch_630/old-fashioned-raspberry-jam.jpg
  render() {
    return (
     <div className="banner" style={{backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url('https://www.joyofkosher.com/.image/t_share/MTMxNzYyODU5OTg1MTE1NjE0/homemade-strawberry-jam.jpg`}}>
  <div className="banner-content">
    <h1 className="jammies">Jammies</h1>
    <p>Buy only the best home-made jam</p>
    <a className="btn btn-primary btn-lg browse-button" onClick={this.smoothScroll}>Start now</a>
  </div>
</div>
    );
  }
}
