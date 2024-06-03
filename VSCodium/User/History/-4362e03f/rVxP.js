import { combineReducers } from 'redux';
import authReducer from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

const rootReducer = combineReducers({
  user: authReducer,
  [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
});

export default store;