import React, {Component} from 'react'

class Messenger extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages : [
        "connect to server",
        "add timestamp",
      ],
    }
    //BINDERS
    this.handleMessengerButtonClick = this.handleMessengerButtonClick.bind(this)
  }
  //METHODS
  handleMessengerButtonClick(event){
    event.preventDefault();
    let inputValue = document.querySelector('#App-Body_Messenger-Input').value
    let newMessages = this.state.messages.slice()
    newMessages.push(inputValue)
    this.setState({messages:newMessages})
    document.querySelector('#App-Body_Messenger-Input').value = ""
  }
  //INSTANCES
  createUser(){
    let userProfile = {
      name:"",
      picture:"",
      number:[""],
      email:[""],
      social:[""]
    }
  }

  render(){
    return(
      <div className="Messenger">
        <div className="App-Body_Messenger">
          <div  className="App-Body_Messenger-Title">
            MESSENGER
          </div>
          <input id="App-Body_Messenger-Input"/>
          <button className="App-Body_Messenger-Button"
            onClick={this.handleMessengerButtonClick}>sendMessage</button>
          <div className="Messenger_UserProfile">
          <div className="User_Name">name</div>
          <div className="User_Picture">picture</div>
          <div className="User_Number">number</div>
          <div className="User_Email">email</div>
          <div className="User_Social">social</div>
          </div>
          Conversation
          <ul>
            {this.state.messages.map( element => (
              <div  className="App-Body_Messenger-Item">{element}</div>
            ))}
          </ul>
        </div>

      </div>
    )
  }
}

export default Messenger;
