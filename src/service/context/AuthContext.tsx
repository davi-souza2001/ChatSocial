import route from 'next/router'
import { createContext, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config'

import User from "../../models/User";

interface AuthContextProps {
    userLogged?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
    getIfUserExists?: Function
}

const AuthContext = createContext<AuthContextProps>({})

const provider = new GoogleAuthProvider()

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)

    async function loginGoogle() {
        await signInWithPopup(auth, provider).then((result) => {
            const user = result.user
            const userFinal: User = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                id: user.uid
            }
            console.log(userFinal)
            setLoading(false)
        }).finally(() => {
            route.push('/')
        }).catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage)
            setLoading(false)
        })
    }

    return (
        <AuthContext.Provider value={{ loginGoogle, loading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
