function selectAllDay(state = [], action) {
  const i = action.i;

  switch(action.type) {
    case 'CHECK_ALL_DAY' :
       if (typeof action.buttons === 'number' && !action.buttons) {return state}
       return [
             ...state.slice(0,i), // before the one we are updating
             ...state[i], isFullDay(state, action),
             ...state.slice(i + 1) // after the one we are updating
             ]

    case 'SET_ALL_DAY' :
      return [
            ...state.slice(0,i), // before the one we are updating
            ...state[i], !state[i],
            ...state.slice(i + 1) // after the one we are updating
            ]

    case 'CLEAR' :
              return Array(7).fill(false);
              
    default:
      return state;
  }
}

function isFullDay(state, action){
  const {hourDay, hour, setHour} = action;

  const newHour = {bt: hour*60};
        newHour.et = newHour.bt+59;

  let newDay = [];
  if (setHour) { //remove interval
    return false;
  } else { //add interval
    let isAdd = false;
    hourDay.forEach(val =>
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
     return fullDay
  }
}
export default selectAllDay;
