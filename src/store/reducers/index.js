import { combineReducers } from 'redux';
import breeds from './breeds_reducer';
import profileData from './profile_reducer';

const rootReducer = combineReducers({
         breeds,
         profileData
});

export default rootReducer;