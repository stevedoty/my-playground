import React, { Component } from 'react';

class Parallax extends Component {

  render() {
    return (
      <div className="parallax">

      <p style={{fontSize:"0.5em"}}>PARALLAX⬇️</p>
      <p style={{fontSize:"0.5em"}}>be sure zoom is 100% to see effect</p>

        <div id="group1" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              base layer
            </div>
          </div>
        </div>

        <div id="group2" className="parallax__group">
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


        <div id="group3" className="parallax__group">
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

        <div id="group4" className="parallax__group">
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


        <div id="group5" className="parallax__group">
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

        <div id="group6" className="parallax__group">
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

        <div id="group7" className="parallax__group">
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
