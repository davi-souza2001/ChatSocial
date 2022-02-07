import UseAuth from '../../service/hook/useAuth';
import UseChat from '../../service/hook/useChat';
import BoxMessage from './BoxMessage';

import styles from './ListMessage.module.scss';

export default function index() {
  const { users, user } = UseAuth();
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
        {users?.map((userUni: any) => {
          if (userUni.email != user?.email) {
            return (
              <li
                key={userUni.id}
                onClick={() => {
                  setMessageUserUnic(userUni);
                }}
              >
                <BoxMessage name={userUni.name} img={userUni.photo} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
