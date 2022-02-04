import useAuth from '../../service/hook/useAuth';
import useChat from '../../service/hook/useChat';
import BoxMessage from '../BoxMessage';

import styles from './ListMessage.module.scss';

export default function index() {
  const { users } = useAuth();
  const { createChat, messageUserUnic, setMessageUserUnic } = useChat();

  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div
        onClick={() => {
          setMessageUserUnic({ name: 'Geral' });
          console.log(messageUserUnic);
        }}
      >
        <BoxMessage name={'Geral'} />
      </div>
      {users?.map((user: any) => {
        return (
          <div
            key={user.id}
            onClick={() => {
              setMessageUserUnic(user);
              console.log(messageUserUnic.name);
            }}
          >
            <BoxMessage name={user.name} img={user.photo} />
          </div>
        );
      })}
    </div>
  );
}
