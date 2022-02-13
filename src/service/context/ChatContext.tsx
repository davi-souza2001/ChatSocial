import { createContext, useEffect, useState } from 'react';

import {
  auth,
  database,
  ref,
  get,
  set,
  child,
  onValue,
  push
} from '../../firebase/config';
import useAuth from '../hook/useAuth';

interface AuthContextProps {
  sendMensage?: any;
  messages?: Object[];
  messageUserUnic?: any;
  setMessageUserUnic?: any;
  messageSend?: String;
  setMessageSend?: any;
  menuMobile?: boolean;
  setMenuMobile?: any;
}

const AuthContext = createContext<AuthContextProps>({});

export function ChatProvider(props: any) {
  const { user } = useAuth();
  const [messageUserUnic, setMessageUserUnic] = useState({
    name: 'Geral',
    email: '',
  });
  const [messageSend, setMessageSend] = useState('');
  const [messages, setMessages] = useState<Object[]>([]);
  const [menuMobile, setMenuMobile] = useState(true);
  let hour = new Date().getHours()
  let minute = new Date().getMinutes()
  let hourFinal = `${hour}:${minute}`

  function sendMensage(e: any) {
    e.preventDefault();
    if (user?.email != '' && messageSend != '') {
      if (messageUserUnic.name === 'Geral') {
        const db = database;
        const postList = ref(db, `chat/Geral`)
        const newPostRef = push(postList)
        set(newPostRef, {
          mensage: messageSend,
          userSend: user?.email,
          userReceived: 'Geral',
          hour: hourFinal,
          userNameSend: user?.name
        });

      } else if (messageUserUnic.name) {
        const db = database;
        const postList = ref(db, `chat/${messageUserUnic.name}`)
        const newPostRef = push(postList)
        set(newPostRef, {
          mensage: messageSend,
          userSend: user?.email,
          userReceived: messageUserUnic.email,
        });
        setMessageSend('');
      }
    } else {
      alert('Faça login ou escreva algo para enviar!');
    }
  }

  async function checkChatExists() {
    const dbRef = database;
    const starCountRef = ref(dbRef, 'chat/' + messageUserUnic.name);
    onValue(starCountRef, async (snapshot) => {
      const data = await snapshot.val();
      const chatList = [];
      for (let id in data) {
        chatList.push({ id, ...data[id] });
      }
      setMessages(chatList);
    });
  }

  useEffect(() => {
    checkChatExists();
  }, [messageUserUnic]);

  return (
    <AuthContext.Provider
      value={{
        messageUserUnic,
        setMessageUserUnic,
        sendMensage,
        messages,
        messageSend,
        setMessageSend,
        menuMobile,
        setMenuMobile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
