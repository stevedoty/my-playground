import React from 'react';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      calendar : [
        {
          event:"event title",
          date:"Jan 1, 2021",
          image:"./logo512.png"
        }
      ]
    }
  }
render() {

    return (
    <div>

      <h1>Calendar</h1>
      <div className="App-Body_Calendar"
        style={{border:"1px solid blue"}}>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image}
            style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
        <div className="App-Body_Calendar-Day">
          <h3>{this.state.calendar[0].event}</h3>
          <h4>{this.state.calendar[0].date}</h4>
          <img src={this.state.calendar[0].image} style={{height:"50px"}}/>
        </div>
      </div>
      
    </div>
    );
  }
}

export default Calendar;
