import { createContext, useState } from 'react';

import { auth, database, ref, get, set, child } from '../../firebase/config';

interface AuthContextProps {
  createChat: Function;
  messageUserUnic?: any;
  setMessageUserUnic?: any;
}

const AuthContext = createContext<AuthContextProps>({ createChat });

async function createChat(handleChat: any) {
  const dbRef = ref(database);
  get(child(dbRef, `chat/${handleChat?.name}`))
    .then((snapshot: any) => {
      if (snapshot.exists()) {
        console.log('Já tem' + snapshot.val());
      } else {
        set(ref(database, 'chat/' + handleChat.name), {
          id: Math.random(),
          name: handleChat.name,
        });
      }
    })
    .catch((error: any) => {
      console.error(error);
    });
}

export function ChatProvider(props: any) {
  const [messageUserUnic, setMessageUserUnic] = useState({ name: 'Geral' });

  return (
    <AuthContext.Provider
      value={{ createChat, messageUserUnic, setMessageUserUnic }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
