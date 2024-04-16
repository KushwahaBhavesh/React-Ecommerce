import { createSlice } from "@reduxjs/toolkit";
// import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE} from "../constant/userConstant";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: []
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    REGISTER_USER_REQUEST: (action) => {
      return loading = true
    },
    REGISTER_USER_SUCCESS: (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true
      }
    },
    REGISTER_USER_FAILURE: (state, action) => {
      loading = false;
      error = action.payload;
      isAuthenticated = false;
    },


  }
})

export const { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } = userReducer.actions
export default userReducer.reducer
