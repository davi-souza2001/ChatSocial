import route from 'next/router';
import Image from 'next/image';
import Cookie from 'js-cookie';

import useAuth from '../../service/hook/useAuth';

import styles from './TopBar.module.scss';
import useChat from '../../service/hook/useChat';

export default function ButtonAppBar() {
  const { user, loginGoogle } = useAuth();
  const { messageUserUnic } = useChat();

  function logout() {
    Cookie.remove('Admin-cookie-social-chat');
    route.push('/login');
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.userInfo}>
        {user?.photo && <Image src={user.photo} width={75} height={75} />}
        {user?.name ? (
          <h1 onClick={logout}>{user.name}</h1>
        ) : (
          <h2 onClick={loginGoogle}>Logar</h2>
        )}
      </div>

      <div className={styles.nseioqbotar}>
        <div style={{ border: '1px solid red' }}> 
          {messageUserUnic.photo ? (
            <Image src={messageUserUnic.photo} width={50} height={50} />
          ) : (
            ''
          )}
        </div>
        <h1>{messageUserUnic?.name}</h1>
        <h2>Online</h2>
      </div>
    </div>
  );
}
