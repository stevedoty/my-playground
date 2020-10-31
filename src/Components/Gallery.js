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

        <div className="Gallery_Item ">
          <img className="Gallery_Item-Child Gallery_Item-Image" src={starscape}/>
          <div className="Gallery_Item-Child Gallery_Item-TextBlock">starscape</div>
        </div>

        <div className="Gallery_Item">
          <img className="Gallery_Item-Child Gallery_Item-Image" src={springBlossoms}/>
          <div className="Gallery_Item-Child Gallery_Item-TextBlock">spring blossoms</div>
        </div>

        <div className="Gallery_Item">
          <img className="Gallery_Item-Child Gallery_Item-Image" src={summerClovers}/>
          <div className="Gallery_Item-Child Gallery_Item-TextBlock">summer clovers</div>
        </div>

        <div className="Gallery_Item">
          <img className="Gallery_Item-Child Gallery_Item-Image" src={autumnTrees}/>
          <div className="Gallery_Item-Child Gallery_Item-TextBlock">autumn trees</div>
        </div>

        <div className="Gallery_Item">
          <img className="Gallery_Item-Child Gallery_Item-Image" src={winterIce}/>
          <div className="Gallery_Item-Child Gallery_Item-TextBlock">winter ice</div>
        </div>

      </div>
    );
  }
}

export default Gallery;
