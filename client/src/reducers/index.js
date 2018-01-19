import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authReducers from './authReducers';

export default combineReducers({
  auth: authReducers,
  form: reduxFormReducer
});
