import useAuth from '../service/hook/useAuth'
import styles from '../styles/Login.module.css'
import AuthContext from '../service/context/AuthContext'
import { useContext } from 'react'

export default function login(){

    const { alo } = useAuth()
    const context = useContext(AuthContext)
    console.log(context)

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentLogin}>
                <div className={styles.login}>
                    <h2>Login</h2>
                </div>
            </div>
        </div>
    )
}
