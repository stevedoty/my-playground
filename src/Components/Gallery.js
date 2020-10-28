import React, { Component } from 'react';
import starscape from '../Assets/starscape.jpg';

class Gallery extends Component {

constructor(props){
  super(props);

  this.state = {
  }
}




  render() {
    return (
      <div className="Gallery">
        <div
          style={{
            position:"relative",
            height:"400px", 
            overflow: "hidden"}}>
        <img src={starscape}
          style={{
            position:"absolute",
            transform: "translate(-50%,-50%) scale(0.4)",
            top:"50%",
            left:"50%"}}/>
        </div>

      </div>
    );
  }
}

export default Gallery;
