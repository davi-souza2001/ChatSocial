import TopBar from '../components/Header';
import ListMessages from '../components/Users';
import MessageContent from '../components/Chat';
import styles from './index.module.scss'

export default function index() {
  return (
    <>
      <TopBar />
      <div className={styles.content}>
        <ListMessages />
        <MessageContent />
      </div>
    </>
  );
}
