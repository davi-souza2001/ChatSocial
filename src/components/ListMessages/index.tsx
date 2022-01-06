import { Fab } from '@mui/material'
import BoxMessage from '../BoxMessage'
import AddIcon from '@mui/icons-material/Add'

import styles from './ListMessage.module.css'

export default function index() {
    return (
        <div className={styles.contentGeral}>
            <BoxMessage />
            <div className={styles.contentButton}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}
