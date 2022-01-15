import { createContext, useState } from 'react'

import User from "../../models/User";

interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
    alo?: any
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props: any){
    const [alo, setAlo] = useState('alooooo')
    
    return (
        <AuthContext.Provider value={{alo}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
