import { createContext, useEffect, useState } from 'react';

import { auth, database, ref, get, set, child } from '../../firebase/config';

interface AuthContextProps {
  handleIfExistsChat?: Function;
  messages?: Object[]
  messageUserUnic?: any;
  setMessageUserUnic?: any;
}

const AuthContext = createContext<AuthContextProps>({});

export function ChatProvider(props: any) {
  const [messageUserUnic, setMessageUserUnic] = useState({ name: 'Geral' });
  const [messages, setMessages] = useState<Object[]>([])

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
      value={{ handleIfExistsChat, messageUserUnic, setMessageUserUnic, messages }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
