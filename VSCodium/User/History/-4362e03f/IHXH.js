import { createStore, combineReducers } from 'redux';
import userAuthSlice from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

const rootReducer = combineReducers({
  user: userA,
  [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
});

const store = createStore(rootReducer);

export default store;