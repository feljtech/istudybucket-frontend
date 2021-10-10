import axios from 'axios'


export const login = async(userCredentials, dispatch) => {
    const url ='auth/login'
    dispatch({type:"LOGIN_START"})
    try {
        const res = axios.post(url,userCredentials)
    } catch (error) {
        
    }
}