import { LOGIN, LOGOUT } from '../actions/userActions';
import { createApi } from '@reduxjs/toolkit/query/react';



const initialState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  
  reducers: {
    login (name, password) {

    },
    logout () {

    }
  }
})

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;