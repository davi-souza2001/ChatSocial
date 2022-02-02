import useAuth from '../../service/hook/useAuth'
import BoxMessage from '../BoxMessage'

import styles from './ListMessage.module.css'

export default function index() {
    const { users } = useAuth()

    console.log(users)
    
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentInput}>
                <input type="text" />
            </div>
            <div className={styles.contentUserMessage} >
                <BoxMessage name={'Geral'}/>
            </div>
        </div>
    )
}
