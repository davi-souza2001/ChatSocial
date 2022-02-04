import useChat from '../../service/hook/useChat'
import styles from './MessageContent.module.css'

export default function index() {

  const { messageUserUnic } = useChat()

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentMessages}>
                <div className={styles.contentMessagesUnicUserSelf}>
                    <div className={styles.messageOutUser}>
                        <p>{messageUserUnic?.name}</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicUserSelf}>
                    <div className={styles.messageOutUser}>
                        <p>Olassd sadsad sadsad sa asdsadsa</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicOutUser}>
                    <div className={styles.messageWithUser}>
                        <p>Ola</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicOutUser}>
                    <div className={styles.messageWithUser}>
                        <p>Olassd sadsad sadsad sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicUserSelf}>
                    <div className={styles.messageOutUser}>
                        <p>Ola</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicUserSelf}>
                    <div className={styles.messageOutUser}>
                        <p>Olassd sadsad sadsad sa asdsadsa</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicOutUser}>
                    <div className={styles.messageWithUser}>
                        <p>Ola</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicOutUser}>
                    <div className={styles.messageWithUser}>
                        <p>Olassd sadsad sadsad sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicUserSelf}>
                    <div className={styles.messageOutUser}>
                        <p>Ola</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicUserSelf}>
                    <div className={styles.messageOutUser}>
                        <p>Olassd sadsad sadsad sa asdsadsa</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicOutUser}>
                    <div className={styles.messageWithUser}>
                        <p>Ola</p>
                    </div>
                </div>
                <div className={styles.contentMessagesUnicOutUser}>
                    <div className={styles.messageWithUser}>
                        <p>Olassd sadsad sadsad sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa sa asdsadsa</p>
                    </div>
                </div>
            </div>
            <div className={styles.contentInput}>
                <input type="text" />
                <input type="submit"/>
            </div>
        </div>
    )
}
