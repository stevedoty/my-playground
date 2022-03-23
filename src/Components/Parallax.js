import React, { Component } from 'react';

let twoDimensions = {
  position: "relative",
  height: "100vh",
  transformStyle: "preserve-3d",
  transition: "transform 0.5s",
  transitionProperty: "transform",
  transitionDuration: "0.5s",
  transitionTimingFunction: "ease",
  transitionDelay: "0s",
}
let threeDimensions = {
  transform:"translate3d(700px,0,-800px)rotateY(30deg)"
}

class Parallax extends Component {
  constructor(props){
    super(props);
    this.state = {
      parallaxStyleToggle:twoDimensions
    }
    this.handleViewerClick=this.handleViewerClick.bind(this)
  }

  handleViewerClick(event){
    event.preventDefault();
    if(this.state.parallaxStyleToggle===twoDimensions){
      this.setState({parallaxStyleToggle:threeDimensions})
    }else{
      this.setState({parallaxStyleToggle:twoDimensions})
    }
  }

  render() {
    return (
      <div className="parallax">
        <p style={{fontSize:"0.5em"}}>PARALLAX⬇️</p>
        <p style={{fontSize:"0.5em"}}>be sure zoom is 100% to see effect</p>
        <button onClick={this.handleViewerClick}>DemoMode</button>
        <div id="group1" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
        </div>
        <div id="group2" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
          <div className="parallax__layer parallax__layer--back">
            <div className="title">
              background layer
            </div>
          </div>
        </div>
        <div id="group3" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">
              foreground layer
            </div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
        </div>
        <div id="group4" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
          <div className="parallax__layer parallax__layer--back">
            <div className="title">
              back layer
            </div>
          </div>
          <div className="parallax__layer parallax__layer--deep">
            <div className="title">
              deep background layer
            </div>
          </div>
        </div>
        <div id="group5" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">
              foreground layer
            </div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
        </div>
        <div id="group6" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--back">
            <div className="title">
              background layer
            </div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
        </div>
        <div id="group7" className="parallax__group" style={this.state.parallaxStyleToggle}>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
