import route from 'next/router'
import { createContext, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, database, ref, set, child } from '../../firebase/config'

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

async function setUserInDataBase(user: User){
    console.log(user)
    set(ref(database, 'users/' + user.email), {
        user
    })
}  

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
            setUserInDataBase(userFinal)
        }).finally(() => {
            setLoading(false)
            // route.push('/')
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
