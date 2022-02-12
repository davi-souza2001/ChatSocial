import { useState } from 'react';
import route from 'next/router';
import Image from 'next/image';
import Cookie from 'js-cookie';

import useAuth from '../../service/hook/useAuth';

import styles from './Header.module.scss';
import useChat from '../../service/hook/useChat';

export default function ButtonAppBar() {
  const { user, loginGoogle } = useAuth();
  const { messageUserUnic, menuMobile, setMenuMobile } = useChat();
  const [useToggle, setUseToggle] = useState(false)

  function logout() {
    Cookie.remove('Admin-cookie-social-chat');
    route.push('/login');
  }

  //Limpa o nome
  //@ts-ignore
  String.prototype.nameClean = function () {
    return this.split(' ').slice(0, 1).join(' ').toLowerCase();
  };

  //Adiciona maiusculo na primeira letra
  //@ts-ignore
  String.prototype.nameCleaned = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        {user?.photo && (
          <Image
            src={user.photo}
            width={60}
            height={60}
            alt="Imagem da conversa geral"
          />
        )}
        {user?.name ? (
          //@ts-ignore
          <h1 onClick={logout}>{user.name.nameClean().nameCleaned()}</h1>
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
        <h1>{messageUserUnic?.name.nameClean().nameCleaned()}</h1>
        <h2>Online</h2>
        <div className={styles.menuToggle} onClick={() =>  setUseToggle(!useToggle)}>
          <p>Menu</p>
        </div>
        {useToggle && (
          <div className={styles.toggle}>
            <h2>Teste</h2>
            <h2>Teste</h2>
          </div>
        )}
      </div>
    </header>
  );
}
