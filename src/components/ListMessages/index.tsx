import useAuth from '../../service/hook/useAuth'
import BoxMessage from '../BoxMessage'

import styles from './ListMessage.module.css'

export default function index() {
    const { users, setMessageUserUnic } = useAuth()

    console.log(users)

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentInput}>
                <input type="text" />
            </div>
            <div className={styles.contentUserMessage} onClick={() => setMessageUserUnic('Geral')}>
                <BoxMessage name={'Geral'} />
            </div>
            {users?.map((user: any) => {
                return (
                    <div key={user.id} className={styles.contentUserMessage} onClick={() => setMessageUserUnic(user.name)} >
                        <BoxMessage name={user.name} img={user.photo}/>
                    </div>
                )
            })}
        </div>
    )
}
