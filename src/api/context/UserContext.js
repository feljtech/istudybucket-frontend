import React from 'react'
import UserReducer from '../reducers/UserReducer'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

export const UserContext = React.createContext(INITIAL_STATE)

const UserContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(UserReducer, INITIAL_STATE)
    return (
        <UserContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
