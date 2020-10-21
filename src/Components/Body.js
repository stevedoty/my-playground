import React from 'react';

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
        "hi",
        "hello",
        "how are you"
      ]
    }
    this.handleTodoButtonClick = this.handleTodoButtonClick.bind(this)
  }

  handleTodoButtonClick(event){
    event.preventDefault();
    let newTodos = this.state.todos
    newTodos.push("3")
    this.setState({todos:newTodos})
  }
  render() {

    return (
    <div className="App-Body">
      <div className="App-Body_Todos">
        this is my todo-list
        <button className="App-Body_Todos-Button"
          onClick={this.handleTodoButtonClick}>addNew</button>
        <ul>
          this is my todo-list
          {this.state.todos.map( element => <div  className="App-Body_Todos-Item">{element}</div> )}
        </ul>
      </div>

      <div className="App-Body_Messenger">
        this is my todo-list
        <button className="App-Body_Messenger-Button"
          onClick={this.handleTodoButtonClick}>addNew</button>
        <ul>
          this is my messenger
          {this.state.todos.map( element => <div  className="App-Body_Messenger-Item">{element}</div> )}
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
