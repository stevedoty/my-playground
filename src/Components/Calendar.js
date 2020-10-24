//https://www.npmjs.com/package/react-calendar
//https://www.npmjs.com/package/react-schedule-calendar


// class Calendar extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       calendar : [
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//         {
//           event:"EVENT TITLE",
//           date:"Jan 1, 2021",
//           image:"./logo512.png"
//         },
//       ]
//     }
//   }
// render() {
//
//     return (
//     <div>
//
//       <h1>Calendar</h1>
//       <div className="App-Body_Calendar"
//         style={{border:"1px solid blue"}}>
//         {this.state.calendar.map((day, i) => {
//           return <div className="App-Body_Calendar-Day">
//             <h3>{day.event}</h3>
//             <h4>{day.date}</h4>
//             <img src={day.image}
//               style={{height:"50px"}}/>
//           </div>
//         })}
//       </div>
//
//     </div>
//     );
//   }
// }
//
// export default Calendar;

import React, { Component } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

class MyCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App-Body_Calendar-Container">
        <Calendar
          className="App-Body_MyCalendar"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default MyCalendar;
