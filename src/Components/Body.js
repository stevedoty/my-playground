import React from 'react';

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
        "1",
        "2",
        "2"
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
        <button className="App-Body_Todos-Button"
          onClick={this.handleTodoButtonClick}>addNew</button>
        <ul>
          this is my todo-list
          {this.state.todos.map( element => <li  className="App-Body_Todos-Item">{element}</li> )}
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
    );
  }
}

export default Body;
