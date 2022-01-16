import TopBar from '../components/TopBar'
import ListMessages from '../components/ListMessages'
import MessageContent from '../components/MessageContent'

import styles from '../styles/Principal.module.css'
import useAuth from '../service/hook/useAuth'

export default function index() {
  return (
    <>
      <TopBar />
      <div className={styles.contentGeral}>
        <ListMessages />
        <MessageContent />
      </div>
    </>
  )
}