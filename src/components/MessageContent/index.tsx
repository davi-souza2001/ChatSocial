import useChat from '../../service/hook/useChat';
import styles from './MessageContent.module.scss';

export default function index() {
  const { messageUserUnic } = useChat();

  return (
    <div className={styles.contentGeral}>
      <div className={styles.contentMessages}>
        <div className={styles.contentMessagesUnicUserSelf}>
          <div className={styles.messageOutUser}>
            <p>{messageUserUnic?.name}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Olassd sadsad sadsad sa asdsadsa</p>
          </div>
        </div>
      </div>
      <div>
        <input type="text" />
        <input type="submit" />
      </div>
    </div>
  );
}
