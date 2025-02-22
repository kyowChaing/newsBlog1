import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);


// create user using createUserWithEmailAndPassword() firebase authentication method

    const createUser = (email, password, name, imgurl)=>{

            return createUserWithEmailAndPassword(auth,email,password);
            
    }


// create existing user Login/signInd process using  signInWithEmailAndPassword()

    const userLogin = ( email, password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }

// Set an authentication state observer and get user data

    useEffect(()=>{

      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return ()=>unSubscribe();
    }, [])

    const authInfo = { user, createUser, userLogin }

    console.log( "user is", user);

  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider