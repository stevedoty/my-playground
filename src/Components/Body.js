import React from 'react';

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
        "hi",
        "hello",
        "how are you"
      ],
      messages : [
        "my name is ...",
        "how's it going?",
      ]
    }
    this.handleTodoButtonClick = this.handleTodoButtonClick.bind(this)
    this.handleMessengerButtonClick = this.handleMessengerButtonClick.bind(this)
  }

  handleTodoButtonClick(event){
    event.preventDefault();
    let newTodos = this.state.todos
    newTodos.push("3")
    this.setState({todos:newTodos})
  }

  handleMessengerButtonClick(event){
    event.preventDefault();
    let newMessages = this.state.messages
    newMessages.push("hi")
    this.setState({messages:newMessages})
  }

  render() {

    return (
    <div className="App-Body">
      <div className="App-Body_Todos">
        this is my todo-list
        <button className="App-Body_Todos-Button"
          onClick={this.handleTodoButtonClick}>addNew</button>
        <ul>
        <div  className="App-Body_Todos-Title">
          this is my Todos
        </div>
          {this.state.todos.map( element => <div  className="App-Body_Todos-Item">{element}</div> )}
        </ul>
      </div>

      <div className="App-Body_Messenger">
        this is my todo-list
        <button className="App-Body_Messenger-Button"
          onClick={this.handleMessengerButtonClick}>sendMessage</button>
        <ul>
        <div  className="App-Body_Messenger-Title">
          this is my Messenger
        </div>
          {this.state.messages.map( element => <div  className="App-Body_Messenger-Item">{element}</div> )}
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
