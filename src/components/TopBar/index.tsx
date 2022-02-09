import route from 'next/router';
import Image from 'next/image';
import Cookie from 'js-cookie';

import useAuth from '../../service/hook/useAuth';

import styles from './TopBar.module.scss';
import useChat from '../../service/hook/useChat';
import { useState } from 'react';

export default function ButtonAppBar() {
  const { user, loginGoogle } = useAuth();
  const { messageUserUnic, menuMobile, setMenuMobile } = useChat();

  function logout() {
    Cookie.remove('Admin-cookie-social-chat');
    route.push('/login');
  }

  const handleClick = () => {
    setMenuMobile(() => !menuMobile);
    console.log(menuMobile);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.userInfo}>
        {user?.photo && (
          <Image
            src={user.photo}
            width={75}
            height={75}
            alt="Imagem da conversa geral"
          />
        )}
        {user?.name ? (
          <h1 onClick={logout}>{user.name}</h1>
        ) : (
          <h2 onClick={loginGoogle}>Logar</h2>
        )}
      </div>
      <div className={styles.nseioqbotar}>
        {messageUserUnic.name === 'Geral'
          ? null
          : messageUserUnic.photo && (
              <Image
                src={messageUserUnic.photo}
                width={50}
                height={50}
                alt={
                  `Imagem do usuário ${messageUserUnic.name}` ||
                  'Imagem do usuário'
                }
              />
            )}
        <h1>{messageUserUnic?.name}</h1>
        <h2>Online</h2>
      </div>
    </div>
  );
}
