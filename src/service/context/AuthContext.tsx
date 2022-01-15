import { createContext, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from '../../firebase/config'

import User from "../../models/User";

interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({})

const provider = new GoogleAuthProvider()

export function AuthProvider(props: any){
    async function loginGoogle() {
        
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const user = result.user
            const userFinal = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                id: user.uid
            }
            console.log(userFinal)
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.email
            const credential = GoogleAuthProvider.credentialFromError(error)
            const errorFinal = {
                errorCode,
                errorMessage,
                email
            }
        })
    }
    
    return (
        <AuthContext.Provider value={{loginGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
