import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">


      <div className="App-Header">
        <div className="App-Header_Navbar">
          app navbar
          <button className="App-Header_Navbar-Button">button</button>
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
      </div>


    </div>
  );
}

export default App;
