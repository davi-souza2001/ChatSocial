import useAuth from '../../service/hook/useAuth';
import useChat from '../../service/hook/useChat';
import BoxMessage from '../BoxMessage';

import styles from './ListMessage.module.scss';

export default function index() {
  const { users } = useAuth();
  const { handleIfExistsChat, messageUserUnic, setMessageUserUnic } = useChat()

  return (
    <div style={{ border: '1px solid red' }} className={styles.users}>
      <div>
        <input type="text" />
      </div>
      <div>
        <BoxMessage name={'Geral'} />
      </div>
      {users?.map((user: any) => {
        return (
          <div
            key={user.id}
            onClick={() => {
              setMessageUserUnic(user);
            }}
          >
            <BoxMessage name={user.name} img={user.photo} />
          </div>
        );
      })}
    </div>
  );
}
