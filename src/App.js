import React from 'react';

import Body from './Components/Body.js'
import Parallax from './Components/Parallax.js'
import './App.css';



let handleNavbarModalToggle = (event) => {
  event.preventDefault();
  let modalStyle = document.querySelector('#App-Header_Navbar-Button_Modal').style
  if (modalStyle.display === "none"){
    modalStyle.display = "block"
  }else{modalStyle.display = "none"}
}



function App() {
  return (
    <div className="App">


      <div className="App-Header">
        <div className="App-Header_Navbar">
          app navbar
          <button className="App-Header_Navbar-Button"
            onClick={handleNavbarModalToggle}>toggleModal</button>
          <span id="App-Header_Navbar-Button_Modal"
            style={{display:"none"}}>Modal</span>
        </div>
      </div>




        <Body/>

        <Parallax/>


      <div className="App-Footer">
        this is my Footer
        <div className="App-Footer_Contacts">
        phone
        email
        social
        </div>
      </div>


    </div>
  );
}

export default App;
