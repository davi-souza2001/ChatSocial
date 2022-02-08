import UseAuth from '../../service/hook/useAuth';
import UseChat from '../../service/hook/useChat';
import styles from './MessageContent.module.scss';

export default function index() {
  const { sendMensage, setMessageSend, messages, messageUserUnic } = UseChat()
  const { user } = UseAuth()

  function renderMensages() {
    if (messageUserUnic.name === 'Geral') {
      return messages?.map((msg: any) => {
        return (
          <div className={msg.userSend == user?.email ? styles.textRight : styles.textLeft} key={msg.id}>
            <p>{msg.mensage}</p>
          </div>
        )
      })
    }
  }

  return (
    <div className={styles.chat}>
      <div className={styles.containerText}>
        {renderMensages()}
      </div>
      <div className={styles.input}>
        <i className="fas fa-plus"></i>
        <input type="text" onChange={(e) => setMessageSend(e.target.value)} />
        <i className="far fa-paper-plane" onClick={sendMensage} ></i>
      </div>
    </div>
  );
}
