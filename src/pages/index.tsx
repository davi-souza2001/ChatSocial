import TopBar from '../components/TopBar';
import ListMessages from '../components/ListMessages';
import MessageContent from '../components/MessageContent';
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
