import useChat from '../../service/hook/useChat';
import styles from './MessageContent.module.scss';



export default function index() {
  const { sendMensage, setMessageSend, messages } = useChat()
  console.log(messages)

  return (
    <div className={styles.chat}>
      <div className={styles.containerText}>
        <div className={styles.textLeft}>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 08:00</p>
        </div>
        <div className={styles.textRight}>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 08:02</p>
        </div>
        {messages?.map((msg: any) => {
          return (
            <div className={styles.textLeft} key={msg.id}>
              <p>{msg.mensage}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.input}>
        <i className="fas fa-plus"></i>
        <input type="text" onChange={(e) => setMessageSend(e.target.value)} />
        <i className="far fa-paper-plane" onClick={sendMensage} ></i>
      </div>
    </div>
  );
}
