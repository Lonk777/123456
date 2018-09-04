// set hour
export function setHour(day, hour, setHour, hourDay, buttons ) {
  return {
    type: 'SET_HOUR',
    day,
    hour,
    setHour,
    hourDay,
    buttons
  }
}

// set all day
export function setAllDay(i, isAllDay, day) {
  return {
    type: 'SET_ALL_DAY',
    i,
    isAllDay,
    day
  }
}

// check all day
export function checkAllDay(i, hour, setHour, hourDay, buttons) {
  return {
    type: 'CHECK_ALL_DAY',
    i,
    hour,
    setHour,
    hourDay,
    buttons
  }
}

// clear
export function clear() {
  return {
    type: 'CLEAR'
  }
}
