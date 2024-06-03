import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

const rootReducer = combineReducers({
  user: authReducer,
  [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
});

const store = createStore(rootReducer);

export default store;