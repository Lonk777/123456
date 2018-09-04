import { combineReducers } from 'redux';

import weekHours from './weekHours.js';
import selectAllDay from './selectAllDay.js';

const rootReducer = combineReducers({weekHours, selectAllDay});

export default rootReducer;
