import React from 'react';

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
        "on click, add object to list/server/db",
        "hello",
        "how are you"
      ],
      messages : [
        "my name is ...",
        "how's it going?",
      ]
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
      <div className="App-Body_Todos">
        <div  className="App-Body_Todos-Title">
          this is my Todos
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

      <div className="App-Body_Messenger">
        <div  className="App-Body_Messenger-Title">
          this is my Messenger
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

      <div className="App-Body_Gallery">
        <div  className="App-Body_Gallery-Title">
          this is my gallery
        </div>
        <div className="App-Body_Gallery-Item">
        </div>
        <div className="App-Body_Gallery-Item">
        </div>
        <div className="App-Body_Gallery-Item">
        </div>
      </div>
    </div>
    );
  }
}

export default Body;
