import TopBar from '../components/TopBar';
import ListMessages from '../components/ListMessages';
import MessageContent from '../components/MessageContent';
import ForceAuthentication from '../components/auth/ForceAuth';
import styles from './index.module.scss'

export default function index() {
  return (
    <ForceAuthentication>
      <TopBar />
      <div className={styles.content}>
        <ListMessages />
        <MessageContent />
      </div>
    </ForceAuthentication>
  );
}
