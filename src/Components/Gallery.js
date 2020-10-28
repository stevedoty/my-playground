import React, { Component } from 'react';
import starscape from '../Assets/starscape.jpg';
import springBlossoms from '../Assets/spring-blossoms.jpg';
import summerClovers from '../Assets/summer-clovers.jpg';
import autumnTrees from '../Assets/autumn-trees.jpg';
import winterIce from '../Assets/winter-ice.jpg';


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
            transform: "translate(-50%,-50%) scale(0.3)",
            top:"50%",
            left:"50%"}}/>
        </div>

        <div
          style={{
            position:"relative",
            height:"400px",
            overflow: "hidden"}}>
        <img src={springBlossoms}
          style={{
            position:"absolute",
            transform: "translate(-50%,-50%) scale(0.3)",
            top:"50%",
            left:"50%"}}/>
        </div>

        <div
          style={{
            position:"relative",
            height:"400px"
            }}>
        <img src={summerClovers}
          style={{
            position:"absolute",
            transform: "translate(-50%,-50%) scale(0.25)",
            top:"50%",
            left:"50%"}}/>
        </div>

        <div
          style={{
            position:"relative",
            height:"400px",
            overflow: "hidden"}}>
        <img src={autumnTrees}
          style={{
            position:"absolute",
            transform: "translate(-50%,-50%) scale(0.3)",
            top:"50%",
            left:"50%"}}/>
        </div>

        <div
          style={{
            position:"relative",
            height:"400px",
            overflow: "hidden"}}>
        <img src={winterIce}
          style={{
            position:"absolute",
            transform: "translate(-50%,-50%) scale(0.3)",
            top:"50%",
            left:"50%"}}/>
        </div>



      </div>
    );
  }
}

export default Gallery;
