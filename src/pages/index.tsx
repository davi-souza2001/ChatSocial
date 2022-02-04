import TopBar from '../components/TopBar'
import ListMessages from '../components/ListMessages'
import MessageContent from '../components/MessageContent'
import ForceAuthentication from '../components/auth/ForceAuth'

import styles from '../styles/Principal.module.css'

export default function index() {
  return (
    <ForceAuthentication>
      <TopBar />
      <div className={styles.contentGeral}>
        <ListMessages />
        <MessageContent />
      </div>
    </ForceAuthentication>
  )
}