import React, {createContext, useReducer} from "react"
import users from "../data/users"
import { 
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
} from "./types";

const INITIAL_STATE = {users};
const UsersContext = createContext({});

export const UsersProvider = props => {

    const reducer = (state, action) => {
        const user = action.payload
        switch (action.type) {
            case CREATE_USER:
                user.id = Math.random()
                return {
                    ...state,
                    users: [...users, user]
                }
            case DELETE_USER:
                return {
                    ...state,
                    users: state.users.filter(u => u.id !== user.id)
                }
            case UPDATE_USER:
                return{
                    ...state,
                    users: state.users.map(u => u.id === user.id ? user : u)
                }
            default:
                return state
        }
    }   

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext