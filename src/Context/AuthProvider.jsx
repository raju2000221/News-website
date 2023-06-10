import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.comfig';
 
export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = null
    const info ={
        
        user
    }
    return (
        <AuthContext.Provider value={info}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;