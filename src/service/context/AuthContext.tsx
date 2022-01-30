import route from 'next/router'
import { createContext, useEffect, useState } from 'react'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, database, ref, get, set, child } from '../../firebase/config'
import Cookie from 'js-cookie'
import User from "../../models/User"

interface AuthContextProps {
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    user?: User
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
                photo: user.photo,
                id: user.id
            })
            setCookieIdUser(user)
        }
    }).catch((error: any) => {
        console.error(error);
    })
}

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>({
        id: '', email: '', name: '', photo: ''
    })
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

    async function searchUserInformation(userToken: String) {
        const dbRef = ref(database)
        let test
        get(child(dbRef, `/users/${userToken}`)).then((res) => {
            if (res.exists()) {
                // console.log(res.val())
                setUser(res.val())
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (token) {
            searchUserInformation(token)
        }
    }, [token])

    return (
        <AuthContext.Provider value={{ loginGoogle, loading, user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
