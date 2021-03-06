import React,{useReducer} from 'react'
import AppRouter from './routers/AppRouter'
import {AuthContext} from './auth/authContext'
import { authReducer } from './auth/authReducer'
const init= ()=>{
    return JSON.parse(localStorage.getItem('user')) ||{logged:false}
 }
export const App = () => {


    const [user, dispatch] = useReducer(authReducer, {},init)
    return (
        <div>
            <AuthContext.Provider value={{user,dispatch}}>
            <AppRouter/>
            </AuthContext.Provider>
     
        </div>
    )
}
