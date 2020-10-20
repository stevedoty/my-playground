import React from 'react';
import './App.css';

let todos = [
  "1",
  "2"
]

let handleNavbarModalToggle = (event) => {
  event.preventDefault();
  let modalStyle = document.querySelector('#App-Header_Navbar-Button_Modal').style
  if (modalStyle.display === "none"){
    modalStyle.display = "block"
  }else{modalStyle.display = "none"}
}

let handleTodoButtonClick = (event) => {
  event.preventDefault();
  todos.push("3")
  console.log(todos);
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


      <div className="App-Body">

        <div className="App-Body_Todos">
          <button className="App-Body_Todos-Button"
            onClick={handleTodoButtonClick}>addNew</button>
          <ul>
            this is my todo-list
            {todos.map( element => <li  className="App-Body_Todos-Item">{element}</li> )}
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
