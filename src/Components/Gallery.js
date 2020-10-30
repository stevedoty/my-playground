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

        <div className="Gallery_Item" style={{zIndex:"1"}}>
          <img className="Gallery_Item-Image" src={starscape}/>
          <div className="Gallery_Item-TextBlock"></div>
        </div>

        <div className="Gallery_Item" style={{zIndex:"2"}}>
          <img className="Gallery_Item-Image" src={springBlossoms}/>
          <div className="Gallery_Item-TextBlock"></div>
        </div>

        <div className="Gallery_Item" style={{zIndex:"3"}}>
          <img className="Gallery_Item-Image" src={summerClovers}/>
          <div className="Gallery_Item-TextBlock"></div>
        </div>

        <div className="Gallery_Item" style={{zIndex:"4"}}>
          <img className="Gallery_Item-Image" src={autumnTrees}/>
          <div className="Gallery_Item-TextBlock"></div>
        </div>

        <div className="Gallery_Item" style={{zIndex:"5"}}>
          <img className="Gallery_Item-Image" src={winterIce}/>
          <div className="Gallery_Item-TextBlock"></div>
        </div>

      </div>
    );
  }
}

export default Gallery;
