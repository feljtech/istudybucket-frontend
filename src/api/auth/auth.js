import axios from "axios";

export const login = async (userCredentials, dispatch) => {
    const baseUrl = "http://istudybucket-v1.herokuapp.com/"
  const url = baseUrl +"api/auth/login";
  dispatch({ type: "LOGIN_START" });
  try {
    const res = axios.post(url, userCredentials);
    dispatch({type: "LOGIN_SUCCESS", payload:(await res).data})
    console.log(await res)
  } catch (error) {
    dispatch({type: "LOGIN_FAILURE", payload:error})
    console.log(error)
  }
};
