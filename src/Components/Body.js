import React from 'react';

import Gallery from './Gallery.js'
import SimpleMap from './Map.js'
import MyCalendar from './Calendar.js'


class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
        "connect to list/server/db",
        "hello",
        "how are you"
      ],
      audioFiles : [],
      videoFiles : [],
      messages : [
        "connect to server",
        "add timestamp",
      ],

    }
    this.handleTodoAddNewButtonClick = this.handleTodoAddNewButtonClick.bind(this)
    this.handleTodoDeleteButtonClick = this.handleTodoDeleteButtonClick.bind(this)
    this.handleMessengerButtonClick = this.handleMessengerButtonClick.bind(this)
  }

  handleTodoAddNewButtonClick(event){
    event.preventDefault();
    let newTodos = this.state.todos.slice()
    newTodos.push("3")
    this.setState({todos:newTodos})
  }
  handleTodoDeleteButtonClick(event){
    event.preventDefault();
    //querySelector.value
    //find index of list by value
    let newTodos = this.state.todos.slice()
    let selectedTodoItem = newTodos.indexOf(event.target.parentNode.firstChild.innerText)
    newTodos.splice(selectedTodoItem, 1)
    this.setState({todos: newTodos})
  }

  handleMessengerButtonClick(event){
    event.preventDefault();
    let inputValue = document.querySelector('#App-Body_Messenger-Input').value
    let newMessages = this.state.messages.slice()
    newMessages.push(inputValue)
    this.setState({messages:newMessages})
    document.querySelector('#App-Body_Messenger-Input').value = ""
  }

  render() {

    return (
    <div className="App-Body">

      <Gallery/>

      <div className="App-Body_Todos">
        <div  className="App-Body_Todos-Title">
          Todos
        </div>
        <button className="App-Body_Todos-Button"
          onClick={this.handleTodoAddNewButtonClick}>New</button>
        <ul>
          {this.state.todos.map( (element, i) => (
            <div id={`hello${i}`} className="App-Body_Todos-Item" key={i}>
              <div className="App-Body_Todos-Item_Text">
                {element}
              </div>
              <button className="App-Body_Todos-Item_Delete"
                onClick={this.handleTodoDeleteButtonClick}>Delete</button>
            </div>
          ))}
        </ul>
      </div>

      <div className="App-Body_AudioFiles">
        Audio Files
      </div>

      <div className="App-Body_VideoFiles">
        Videos
      </div>

      <div className="App-Body_Messenger">
        <div  className="App-Body_Messenger-Title">
          Chat
        </div>
        <input id="App-Body_Messenger-Input"/>
        <button className="App-Body_Messenger-Button"
          onClick={this.handleMessengerButtonClick}>sendMessage</button>
        <ul>
          {this.state.messages.map( element => (
            <div  className="App-Body_Messenger-Item">{element}</div>
          ))}
        </ul>
      </div>

      <div className="App-Body_HolyGrailLayout">
        <div className="grid">
          <header>
            Header
          </header>

          <aside className="sidebar-left">
            Left Sidebar
          </aside>

          <article>
            Article
          </article>

          <aside className="sidebar-right">
            Rigth Sidebar
          </aside>

          <footer>
            Footer
          </footer>
        </div>
      </div>

      <div style={{height:"500px"}}>
        MAP⬇️
        <SimpleMap/>
      </div>

      CALENDAR⬇️
      <MyCalendar/>




    </div>
    );
  }
}

export default Body;
