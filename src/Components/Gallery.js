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
      <div className="Gallery_Container">
        <div className="Gallery">

          <div className="Gallery_Item ">
            <div className="Gallery_Item-Child Gallery_Item-Image" >
              <img src={starscape}/>
            </div>
            <div className="Gallery_Item-Child Gallery_Item-TextBlock">starscape</div>
          </div>

          <div className="Gallery_Item">
            <div className="Gallery_Item-Child Gallery_Item-Image" >
              <img src={springBlossoms}/>
            </div>
            <div className="Gallery_Item-Child Gallery_Item-TextBlock">spring blossoms</div>
          </div>

          <div className="Gallery_Item">
            <div className="Gallery_Item-Child Gallery_Item-Image" >
              <img src={summerClovers}/>
            </div>
            <div className="Gallery_Item-Child Gallery_Item-TextBlock">summer clovers</div>
          </div>

          <div className="Gallery_Item">
            <div className="Gallery_Item-Child Gallery_Item-Image" >
              <img src={autumnTrees}/>
            </div>
            <div className="Gallery_Item-Child Gallery_Item-TextBlock">autumn trees</div>
          </div>

          <div className="Gallery_Item">
            <div className="Gallery_Item-Child Gallery_Item-Image" >
              <img src={winterIce}/>
            </div>
            <div className="Gallery_Item-Child Gallery_Item-TextBlock">winter ice</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Gallery;
