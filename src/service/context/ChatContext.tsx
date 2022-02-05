import { createContext, useEffect, useState } from 'react';

import { auth, database, ref, get, set, child } from '../../firebase/config';
import useAuth from '../hook/useAuth';

interface AuthContextProps {
  handleIfExistsChat?: Function;
  handleSendMensageUser?: Function;
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

  async function handleSendMensageUser() {
    const dbRef = ref(database)
    get(child(dbRef, `chat/${messageUserUnic.name}`))
      .then((snapshot: any) => {
        set(ref(database, `chat/${messageUserUnic.name}` + user?.email), {
          mensage: messageSend,
          userSend: user?.email,
        });
        console.log('ENVIIADO')
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  async function handleIfExistsChat() {
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
    handleIfExistsChat()
  }, [messageUserUnic])

  return (
    <AuthContext.Provider
      value={{
        handleIfExistsChat,
        handleSendMensageUser,
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
