import React, { Component } from 'react';

import Header from './../header/Header';
import CalendarRow from './../calendar-row/Calendar-row';

import './calendar.css';

class Calendar extends Component {

    render() {

      return (
        <div className='calendar'>
          <Header/>
          {Object.keys(this.props.weekHours).map((day, i) => <CalendarRow {...this.props} key={i} i={i} day={day} />)}
          <p className='btn'>
              <button className='clear' type='button' onClick={this.props.clear.bind(null)}>Clear</button>
              <button className='save' type='button' onClick={()=> console.log(this.props.weekHours) }>Save Changes</button>
          </p>
        </div>
      );
    }
  }

export default Calendar;
