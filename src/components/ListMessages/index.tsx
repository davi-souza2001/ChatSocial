import Image from 'next/image';
import UseAuth from '../../service/hook/useAuth';
import UseChat from '../../service/hook/useChat';
import styles from './ListMessage.module.scss';

export default function index() {
  const { users, user } = UseAuth();
  const { setMessageUserUnic, menuMobile } = UseChat();

  return (
    <div className={`${styles.users} ${menuMobile ? '' : styles.ativo}`}>
      <ul>
        <li
          onClick={() => {
            setMessageUserUnic({ name: 'Geral' });
          }}
        >
          <h1>Geral</h1>
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
                <Image src={userUni.photo} width={50} height={50} />
                <h1>{userUni.name}</h1>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
