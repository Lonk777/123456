import React, { Component } from 'react';
import './allday.css';

class AllDay extends Component {

  render() {
    return (
      <div className='all-day'
          onClick={this.props.setAllDay.bind(null, this.props.i, this.props.selectAllDay[this.props.i], this.props.day)}>
        {this.props.selectAllDay[this.props.i] ? <span className='check'>&#10003;</span> : ''}
      </div>
    );
  }
}

export default AllDay;
