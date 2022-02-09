import UseAuth from '../../service/hook/useAuth';
import UseChat from '../../service/hook/useChat';
import styles from './MessageContent.module.scss';

export default function index() {
  const { sendMensage, setMessageSend, messages, messageUserUnic } = UseChat();
  const { user } = UseAuth();

  function rendeMensages() {
    if (messageUserUnic.name === 'Geral') {
      return messages?.map((msg: any) => {
        return (
          <div
            className={
              msg.userSend == user?.email ? styles.textRight : styles.textLeft
            }
            key={msg.id}
          >
            <p>{msg.mensage}</p>
          </div>
        );
      });
    } else if (messageUserUnic.email != '') {
      return messages?.map((msg: any) => {
        if (user?.email === msg.userReceived || user?.email === msg.userSend) {
          return (
            <div
              className={
                msg.userSend == user?.email ? styles.textRight : styles.textLeft
              }
              key={msg.id}
            >
              <p>{msg.mensage}</p>
            </div>
          );
        }
      });
    }
  }

  return (
    <div className={styles.chat}>
      <div className={styles.containerText}>
        {messageUserUnic.name === 'Geral' ? rendeMensages() : <h1>Em breve</h1>}
      </div>
      <div className={styles.input}>
        {messageUserUnic.name === 'Geral' ? (
          <form onSubmit={sendMensage}>
            <input type="text" onChange={(e) => setMessageSend(e.target.value)} />
            <button type="submit">
              <i className="far fa-paper-plane" onClick={sendMensage}></i>
            </button>
          </form>
        ) : <h1>Em breve</h1>}
      </div>
    </div>
  );
}
