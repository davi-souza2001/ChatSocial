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
    <div>
      <div>
        {user?.photo && (
          <div>
            <Image src={user.photo} width={100} height={100} />
          </div>
        )}
        <div>
          {user?.name ? (
            <h4 onClick={logout}>{user.name}</h4>
          ) : (
            <h2 onClick={loginGoogle}>Logar</h2>
          )}
        </div>
      </div>
      <div>
        <div>
          {messageUserUnic.photo ? (
            <Image src={messageUserUnic.photo} width={50} height={50} />
          ) : (
            ''
          )}
        </div>
        <div>{messageUserUnic?.name}</div>
        <div>Online</div>
      </div>
    </div>
  );
}
