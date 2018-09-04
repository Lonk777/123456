function weekHours(state = {}, action) {
  switch(action.type) {
    case 'SET_HOUR' :

      if (typeof action.buttons === 'number' && !action.buttons) {return state}

      return {
          // take the current state
          ...state,
          // overwrite this day with a new one
          [action.day]: getNewDay(state, action)
        }

    case 'SET_ALL_DAY' :

      const {day, isAllDay } = action;
      return {
          // take the current state
          ...state,
          // overwrite this day with a new one
          [day]: !isAllDay ?  [{bt: 0, et: 1439}] :  []
      }

    case 'CLEAR' :
      return {'mo':[],'tu':[],'we':[],'th':[],'fr':[],'sa':[],'su':[]};

    default:
      return state;
  }
}

function getNewDay(state, action){
  const {day, hour, setHour} = action;

  const newHour = {bt: hour*60};
        newHour.et = newHour.bt+59;

  let newDay = [];
  if (setHour) { //remove interval
    state[day].forEach(val =>
                      {
                      if (val.bt === newHour.bt && val.et > val.bt+60 ) { //begin interval
                        newDay.push({bt: newHour.et+1, et: val.et});
                      } else if (val.et === newHour.et && val.bt < newHour.bt) { //end interval
                        newDay.push({bt: val.bt, et: newHour.bt-1});
                      } else if (val.bt < newHour.bt && val.et > newHour.bt) { //inside interval
                        newDay.push({bt: val.bt, et: newHour.bt-1});
                        newDay.push({bt: newHour.et+1, et: val.et});
                      } else if (val.bt > newHour.bt && val.et < newHour.bt) { //outside interval
                        newDay.push(val);
                      } else if (val.bt !== newHour.bt && val.et !== newHour.et) { //not equal interval
                        newDay.push(val);
                      }
                    });
  } else { //add interval
    let isAdd = false;
    state[day].forEach(val =>
                    {
                      if (val.bt === newHour.et+1) { //begin interval
                        newDay.push({bt: newHour.bt, et: val.et});
                        isAdd = true;
                      } else if (val.et+1 === newHour.bt) { //end interval
                        newDay.push({bt: val.bt, et: newHour.et});
                        isAdd = true;
                      } else { //outside interval
                        newDay.push(val);
                      }
                    });
    if (!isAdd) {
      newDay.push(newHour);
    }
    //if full day than join into one day
    const dayH = [].concat(...newDay.map(item =>
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

    const fullDay = Array(24).fill(false)
                             .map((item, index) => dayH.indexOf(index) > -1)
                             .filter(value => value)
                             .length
                             === 24;
     newDay = fullDay ? [{bt: 0, et: 1439}] : newDay;
  }
  return newDay;
}
export default weekHours;
