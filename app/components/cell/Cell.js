import React, { Component } from 'react';

import './cell.css';

class Cell extends Component {

  render() {
    return (
      <div className={this.props.setTime ? 'cell set-time' : 'cell'}
            onMouseDown={() => {this.props.setHour.call(null, this.props.day,
                                                              this.props.hour,
                                                              this.props.setTime,
                                                              this.props.hourDay);
                                this.props.checkAllDay.call(null, this.props.i,
                                                                  this.props.hour,
                                                                  this.props.setTime,
                                                                  this.props.hourDay);
                              }
                        }
            onMouseOver={(e) => {this.props.setHour.call(null,  this.props.day,
                                                                this.props.hour,
                                                                this.props.setTime,
                                                                this.props.hourDay,
                                                                e.buttons);
                                  this.props.checkAllDay.call(null, this.props.i,
                                                                    this.props.hour,
                                                                    this.props.setTime,
                                                                    this.props.hourDay,
                                                                    e.buttons);
                                }
                        }
      >
      </div>
    );
  }
}

export default Cell;
