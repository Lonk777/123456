import React, { Component } from 'react';

import './day-week.css';

class DayWeek extends Component {

  render() {
    return (
      <div className='day-week'>
        {this.props.day.toUpperCase()}
      </div>
    );
  }
}

export default DayWeek;
