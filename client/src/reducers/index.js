import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authReducers from './authReducers';
import surveysReducers from './surveysReducers';

export default combineReducers({
  auth: authReducers,
  form: reduxFormReducer,
  surveys: surveysReducers
});
