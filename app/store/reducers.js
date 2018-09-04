import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

import weekHours from '../data/data.json';

const selectAllDay = getAllDaySelect(weekHours);

// create an object for the default data
const defaultState = {
  weekHours,
  selectAllDay
};

const store = createStore(rootReducer, defaultState);


export default store;

function getAllDaySelect(data) {
  let selectAllDay = Array(7).fill(false);
  Object.keys(data)
  .forEach((key, index) =>
  {
    let bt = 0, et = 0;
    if (data[key] && data[key][0] && data[key][0].bt) {
      bt = data[key][0].bt;
    }
    if (data[key] && data[key][0] && data[key][0].et) {
      et = data[key][0].et;
    }
    if (bt === 0 && et === 1439) { selectAllDay[index] = true }
  }
)
return selectAllDay;
}
