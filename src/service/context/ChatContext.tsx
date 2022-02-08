import { createContext, useEffect, useState } from 'react';

import {
  auth,
  database,
  ref,
  get,
  set,
  child,
  onValue,
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
  const unicId = Math.floor(Date.now() * Math.random()).toString(36);
  const [menuMobile, setMenuMobile] = useState(false);

  function sendMensage() {
    if (user?.email != '') {
      if (messageUserUnic.name === 'Geral') {
        const db = database;
        set(ref(db, `chat/${messageUserUnic.name}/` + unicId), {
          mensage: messageSend,
          userSend: user?.email,
          userReceived: 'Geral',
        });
      } else if (messageUserUnic.name) {
        const db = database;
        set(ref(db, `chat/${messageUserUnic.name}/` + unicId), {
          mensage: messageSend,
          userSend: user?.email,
          userReceived: messageUserUnic.email,
        });
      }
    } else {
      alert('Faça login');
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
