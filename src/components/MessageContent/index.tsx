import useChat from '../../service/hook/useChat';
import styles from './MessageContent.module.scss';

export default function index() {
  const { messageUserUnic, messages } = useChat();

  console.log('messages');
  console.log(messages);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('enviar texto');
  };

  return (
    <div className={styles.chat}>
      <div className={styles.containerText}>
        <div className={styles.textLeft}>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 08:02</p>
        </div>
        <div className={styles.textLeft}>
          <p>sexo? 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>sexo? 08:02</p>
        </div>
        <div className={styles.textLeft}>
          <p>sexo? 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>sexo? 08:02</p>
        </div>
        <div className={styles.textLeft}>
          <p>sexo? 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>sexo? 08:02</p>
        </div>
        <div className={styles.textLeft}>
          <p>sexo? 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>sexo? 08:02</p>
        </div>
        <div className={styles.textLeft}>
          <p>sexo? 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>sexo? 08:02</p>
        </div>
      </div>
      <div className={styles.input}>
        <i className="fas fa-plus"></i>
        <input type="text" />
        <i className="far fa-paper-plane" onClick={handleSubmit}></i>
      </div>
    </div>
  );
}
