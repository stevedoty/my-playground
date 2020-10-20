import React from 'react';
import './App.css';


let handleClick = (event) => {
  event.preventDefault();
  let modalStyle = document.querySelector('#App-Header_Navbar-Button_Modal').style
  if (modalStyle.display === "none"){
    modalStyle.display = "block"
  }else{modalStyle.display = "none"}
}

let modalStyle = {
  display:"block"
}

function App() {
  return (
    <div className="App">


      <div className="App-Header">
        <div className="App-Header_Navbar">
          app navbar
          <button className="App-Header_Navbar-Button" onClick={handleClick}>toggleModal</button>
          <span id="App-Header_Navbar-Button_Modal" style={modalStyle}>Modal</span>
        </div>
      </div>


      <div className="App-Body">

        <div className="App-Body_Todos">
          
          <ul>
            this is my todo-list
            <li  className="App-Body_Todos-Item">first item</li>
          </ul>
        </div>
        <div className="App-Body_Gallery">
          <div className="App-Body_Gallery-Item">
          </div>
          <div className="App-Body_Gallery-Item">
          </div>
          <div className="App-Body_Gallery-Item">
          </div>
        </div>

      </div>



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
