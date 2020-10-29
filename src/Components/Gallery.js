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
      <div className="Gallery"
        style={{display:"grid", gridTemplateColumns:"6",height:"500px",width:"10500px",backgroundColor:"grey",zIndex:"0"}}
      >


        <img src={starscape}
          style={{
            height:"400px",
            width:"400px",
            float:"left",

            display:"block",

            zIndex:"1"
          }}/>



        <img src={springBlossoms}
          style={{
            height:"400px",
            width:"400px",
            float:"left",

            display:"block",

            zIndex:"2"
          }}/>



        <img src={summerClovers}
          style={{
            height:"400px",
            width:"400px",
            float:"left",

            display:"block",

            zIndex:"3"
          }}/>



        <img src={autumnTrees}
          style={{
            height:"400px",
            width:"400px",
            float:"left",

            display:"block",

            zIndex:"4"
          }}/>



        <img src={winterIce}
          style={{
            height:"400px",
            width:"400px",
            float:"left",

            display:"block",

            zIndex:"5"
          }}/>




      </div>
    );
  }
}

export default Gallery;
