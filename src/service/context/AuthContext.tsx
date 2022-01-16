import route from 'next/router'
import { createContext, useEffect, useState } from 'react'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, database, ref, get, set, child } from '../../firebase/config'
import Cookie from 'js-cookie'
import User from "../../models/User";

interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
    getIfUserExists?: Function
}

const AuthContext = createContext<AuthContextProps>({})

const provider = new GoogleAuthProvider()

function setCookieIdUser(user: User) {
    Cookie.set('Admin-cookie-social-chat', user.id, {
        expires: 7
    })
    route.push('/')
}

async function setUserInDataBase(user: User) {
    const dbRef = ref(database)
    get(child(dbRef, `users/${user.id}`)).then((snapshot: any) => {
        if (snapshot.exists()) {
            // console.log(snapshot.val())
            setCookieIdUser(user)
        } else {
            set(ref(database, 'users/' + user.id), {
                name: user.name,
                email: user.email,
                photo: user.photo
            })
            setCookieIdUser(user)
        }
    }).catch((error: any) => {
        console.error(error);
    })
}

async function searchUserInformation(userToken: String) {
    const dbRef = ref(database)
    get(child(dbRef, `/users/${userToken}`)).then((res) => {
        if (res.exists()) {
            console.log(res.val())
        }
    }).catch((error) => {
        console.log(error)
    })
}

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)
    const token = Cookie.get('Admin-cookie-social-chat')

    async function loginGoogle() {
        await signInWithPopup(auth, provider).then((result) => {
            const user = result.user
            const userFinal: User = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                id: user.uid
            }
            setUserInDataBase(userFinal)
            setLoading(false)
        }).catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage)
            setLoading(false)
        })
    }

    useEffect(() => {
        if (token) {
            searchUserInformation(token)
        }
    }, [token])

    return (
        <AuthContext.Provider value={{ loginGoogle, loading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
