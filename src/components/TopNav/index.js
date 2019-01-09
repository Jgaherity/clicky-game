
import React, { Component } from "react";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    
    return (
      <nav className="TopNav TopNav-default TopNav-fixed-top">
          <div>Test Your Memory</div>
          <div></div>
          <div>Score: {this.props.score}</div>
      </nav>
    );
  }
}

export default TopNav;