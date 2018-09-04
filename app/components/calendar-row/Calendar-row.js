import React, { Component } from 'react';

import Cell from './../cell/Cell';
import DayWeek from './../day-week/DayWeek';
import AllDay from './../allDay/AllDay';

import './calendar-row.css';

class CalendarRow extends Component {

  render() {
    const {weekHours, day} = this.props;
    const dayH = [].concat(...weekHours[day]
                    .map(item =>
                        {
                          const bt = item.bt/60,
                                et = item.et/60;
                          let result = [],
                              count = ~~bt;
                          while (count <= et){
                            result.push(count);
                            count ++; //add hour
                          }
                          return result;
                        }));

    const row = Array(24).fill(false)
                          .map((item, index) => dayH.indexOf(index) > -1)
                          .map((item2,index2) => <Cell
                                                        {...this.props}
                                                        hour={index2}
                                                        key={index2}
                                                        hourDay={weekHours[day]}
                                                        setTime={item2} />);
    return (
      <div className='calendar-row'>
        <DayWeek {...this.props}  />
        <AllDay {...this.props} />
        {row}
      </div>
    );
  }
}

export default CalendarRow;