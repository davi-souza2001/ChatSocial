import UseAuth from '../../service/hook/useAuth';
import UseChat from '../../service/hook/useChat';
import BoxMessage from './BoxMessage';

import styles from './ListMessage.module.scss';

export default function index() {
  const { users } = UseAuth();
  const { setMessageUserUnic } = UseChat()

  return (
    <div className={styles.users}>
      <div className={styles.search}>
        <input type="text" />
      </div>

      <ul>
        <li onClick={() => {
          setMessageUserUnic({ name: 'Geral' });
        }}>
          <BoxMessage name={'Geral'} />
        </li>
        {users?.map((user: any) => {
          return (
            <li
              key={user.id}
              onClick={() => {
                setMessageUserUnic(user);
              }}
            >
              <BoxMessage name={user.name} img={user.photo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
