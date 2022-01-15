import useAuth from '../service/hook/useAuth'
import styles from '../styles/Login.module.css'

export default function login(){

    const { alo } = useAuth()
    console.log(alo)

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
