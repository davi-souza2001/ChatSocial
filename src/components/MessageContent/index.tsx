import { useState } from 'react';
import useChat from '../../service/hook/useChat';
import styles from './MessageContent.module.scss';

export default function index() {
  const { messageUserUnic, messages } = useChat()
  const [messageSend, setMessageSend] = useState('')

  console.log('messages')
  console.log(messageSend)
  
  const handleSubmit= (event: any) => {
    event.preventDefault()
    console.log('enviar texto')
  }

  return (
    <div className={styles.chat}>
      <div className="container">
        <div className="textLeft">
            <p>sexo? 08:00</p>
        </div>
        <div className="textRight">
            <p>sexo? 08:02</p>
        </div>
        <div className="textLeft">
            <p>sexo? 08:00</p>
        </div>
        <div className="textRight">
            <p>sexo? 08:02</p>
        </div>
        <div className="textLeft">
            <p>sexo? 08:00</p>
        </div>
        <div className="textRight">
            <p>sexo? 08:02</p>
        </div>
        <div className="textLeft">
            <p>sexo? 08:00</p>
        </div>
        <div className="textRight">
            <p>sexo? 08:02</p>
        </div>
        <div className="textLeft">
            <p>sexo? 08:00</p>
        </div>
        <div className="textRight">
            <p>sexo? 08:02</p>
        </div>
        <div className="textLeft">
            <p>sexo? 08:00</p>
        </div>
        <div className="textRight">
            <p>sexo? 08:02</p>
        </div>
      </div>
      <div>
        <i className="fas fa-plus"></i>
        <input type="text" onChange={(e) => setMessageSend(e.target.value)}/>
        <i className="far fa-paper-plane" onClick={handleSubmit}></i> 
      </div>
    </div>
  );
}
