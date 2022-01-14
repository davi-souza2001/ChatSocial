import BoxMessage from '../BoxMessage'

import styles from './ListMessage.module.css'

export default function index() {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentInput}>
                <input type="text" />
            </div>
            <div className={styles.contentUserMessage}>
                <BoxMessage />
            </div>
        </div>
    )
}
