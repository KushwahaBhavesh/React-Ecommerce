import { toast } from 'react-toastify';
import axios from 'axios'
import { LOGIN_USER_REQUEST, PORT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from '../constant/userConstant'

export const registerUser = (userDetailArray, navigate) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST })
    const config = { Headers: { "Content-Type": "application/json" } };
    const res = await axios.post(`http://localhost:${PORT}/api/v1/auth/signup`, userDetailArray, config);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.user })
    console.log(res)

    if (res && res.data.success) {
      toast.success(res.data && res.data.msg)
      // dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.user })
      // setTimeout(() => {
      //   navigate('/login');
      // }, 5000);

    }
    else {
      toast.error(res.data.msg)
    }
  } catch (error) {
    toast.error(error)
    toast.error("Some thing went Wrong Try again Later")
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response
    })

  }
}


// login user
export const loginUser = (userDetailArray, navigate) => async (dispatch) => {

  try {
    dispatch({ type: LOGIN_USER_REQUEST })

    const config = { Headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(`http://localhost:${PORT}/api/v1/auth/login`, userDetailArray,config);
    console.log(data)

    if (data && data.success) {
      toast.success(data && data.msg)
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    else {
      toast.error(data.msg)
    }
  } catch (error) {
    console.log(error)
    toast.error("Some thing went Wrong Try again Later")
    // dispatch({
    //   type: REGISTER_USER_FAILURE,
    //   payload: error.response.res.msg
    // })

  }
}
