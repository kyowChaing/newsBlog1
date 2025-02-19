import React, { createContext, useState } from 'react'
import auth from './firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);


// create user using createUserWithEmailAndPassword() firebase authentication method

    const createUser = (email, password, name, imgurl)=>{

            return createUserWithEmailAndPassword(auth,email,password);
            
    }



    const authInfo = { user, createUser }



  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider