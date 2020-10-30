import React, {Component} from 'react'

class Messenger extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
        {
          name:"Steve",
          picture:"IMG",
          number:["1234567890"],
          email:["steve@emailsite.com"],
          social:["steve@socialsite.com"]
        }
      ],
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
          <div className="User_Name">name:{this.state.users[0].name}</div>
          <div className="User_Picture">picture:{this.state.users[0].picture}</div>
          <div className="User_Number">number:{this.state.users[0].number[0]}</div>
          <div className="User_Email">email:{this.state.users[0].email[0]}</div>
          <div className="User_Social">social:{this.state.users[0].social[0]}</div>
          </div>
          <div className="Messenger_Conversation-Title" style={{textAlign:"left",marginLeft:"5em"}}>Conversation</div>
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
