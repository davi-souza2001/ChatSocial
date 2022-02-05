import { createContext, useEffect, useState } from 'react';

import { auth, database, ref, get, set, child } from '../../firebase/config';
import useAuth from '../hook/useAuth';

interface AuthContextProps {
  checkChatExists?: Function;
  messages?: Object[]
  messageUserUnic?: any;
  setMessageUserUnic?: any;
  messageSend?: String
  setMessageSend?: any;
}

const AuthContext = createContext<AuthContextProps>({});

export function ChatProvider(props: any) {
  const { user } = useAuth()
  const [messageUserUnic, setMessageUserUnic] = useState({ name: 'Geral' })
  const [messages, setMessages] = useState<Object[]>([])
  const [messageSend, setMessageSend] = useState('')


  async function checkChatExists() {
    const dbRef = ref(database);
    get(child(dbRef, `/chat/${messageUserUnic.name}`))
      .then(async (snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val())
          const allUMessages = await snapshot.val();
          // const messageList: Array<any> = [];
          // for (let id in allUMessages) {
          //   messageList.push({ id, ...allUMessages[id] });
          // }
          setMessages(allUMessages)
        } else {
          console.log('Não tem nada');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    checkChatExists()
  }, [messageUserUnic])

  return (
    <AuthContext.Provider
      value={{
        checkChatExists,
        messageUserUnic,
        setMessageUserUnic,
        messages,
        messageSend,
        setMessageSend
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
