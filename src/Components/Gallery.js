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


        <img className="Gallery_Item" src={starscape}
          style={{zIndex:"1"}}/>



        <img className="Gallery_Item" src={springBlossoms}
          style={{zIndex:"2"}}/>



        <img className="Gallery_Item" src={summerClovers}
          style={{zIndex:"3"}}/>



        <img className="Gallery_Item" src={autumnTrees}
          style={{zIndex:"4"}}/>



        <img className="Gallery_Item" src={winterIce}
          style={{zIndex:"5"}}/>




      </div>
    );
  }
}

export default Gallery;
