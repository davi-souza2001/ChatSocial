import useAuth from '../../service/hook/useAuth'
import useChat from '../../service/hook/useChat'
import BoxMessage from '../BoxMessage'

import styles from './ListMessage.module.css'

export default function index() {
    const { users, messageUserUnic, setMessageUserUnic} = useAuth()
    const { createChat } = useChat()

    console.log(users)

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentInput}>
                <input type="text" />
            </div>
            <div className={styles.contentUserMessage} onClick={() => {
                setMessageUserUnic({name: 'Geral'})
                createChat(messageUserUnic)
            }}>
                <BoxMessage name={'Geral'} />
            </div>
            {users?.map((user: any) => {
                return (
                    <div key={user.id} className={styles.contentUserMessage} onClick={() => setMessageUserUnic(user)} >
                        <BoxMessage name={user.name} img={user.photo}/>
                    </div>
                )
            })}
        </div>
    )
}
