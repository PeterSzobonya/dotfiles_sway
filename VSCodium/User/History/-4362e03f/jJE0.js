import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

const rootReducer = combineReducers({
  user: userReducer,
  [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
});

const store = createStore(rootReducer);

export default store;