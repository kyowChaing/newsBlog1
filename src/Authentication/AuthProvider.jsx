import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config'
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [ loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

// create user using createUserWithEmailAndPassword() firebase authentication method

    const createUser = (email, password, name, imgurl)=>{

            return createUserWithEmailAndPassword(auth,email,password);
            
    }


// create existing user Login/signInd process using  signInWithEmailAndPassword()

    const userLogin = ( email, password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }
    
// user Login with google popup

const handleGoogleSignIn = ()=>{
    signInWithPopup(auth, provider)

}

// user login with github popup

const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
}
    // Add user name during user registration
    const addDisplayName = (user, name)=>{
        return updateProfile(user, { displayName: name, });
    
    }
     
//set user Signout
    const userLogout = ()=>{return signOut(auth)}

// Set an authentication state observer and get user data

    useEffect(()=>{

      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>unSubscribe();
    }, [])

    const authInfo = { user,loading, createUser, userLogin, userLogout, addDisplayName,handleGoogleSignIn,handleGithubSignIn}

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