import { combineReducers } from 'redux';

import  { teamMembers }  from './teamMembers';
import darkMode from './darkMode';

const rootReducer = combineReducers({
    teamMembers,
    darkMode,
});

export default rootReducer;
