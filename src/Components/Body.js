import React from 'react';

class Body extends React.Component {
  constructor(props){
    super(props);

    this.handleTodoButtonClick = this.handleTodoButtonClick.bind(this)
  }
  todos = [
    "1",
    "2"
  ]
  handleTodoButtonClick(event){
    event.preventDefault();
    this.todos.push("3")
    console.log(this.todos);
  }
  render() {



    return (
    <div className="App-Body">
      <div className="App-Body_Todos">
        <button className="App-Body_Todos-Button"
          onClick={this.handleTodoButtonClick}>addNew</button>
        <ul>
          this is my todo-list
          {this.todos.map( element => <li  className="App-Body_Todos-Item">{element}</li> )}
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
