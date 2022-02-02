import route from 'next/router'
import Image from 'next/image';
import Cookie from 'js-cookie'

import useAuth from '../../service/hook/useAuth'

import styles from './TopBar.module.css'

export default function ButtonAppBar() {
  const { user, loginGoogle } = useAuth()

  function logout() {
    Cookie.remove('Admin-cookie-social-chat')
    route.push('/login')
  }

  return (
    <div className={styles.contentGeral}>
      <div className={styles.boxContentGeral}>
        {user?.photo && (
          <div className={styles.boxContentImageUser}>
            <Image src={user.photo} width={100} height={100} />
          </div>
        )}
        <div className={styles.boxContent}>
          {user?.name ? <h4  onClick={logout}>{user.name}</h4> : <h2 onClick={loginGoogle}>Logar</h2>}
        </div>
      </div>
      <div className={styles.contentNameUserMessage}>
        <div>
          Foto
        </div>
        <div>
          Nome da pessoa
        </div>
        <div>
          País da pessoa
        </div>
      </div>
    </div>
  );
}