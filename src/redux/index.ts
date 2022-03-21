import {combineReducers} from 'redux';
import {userDetailsReducer} from './reducer/userDetails';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  userDetails: userDetailsReducer,
});
export default rootReducer;
