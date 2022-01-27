import route from 'next/router'
import Image from 'next/image';
import useAuth from '../../service/hook/useAuth';

import styles from './TopBar.module.css'

export default function ButtonAppBar() {
  const { user } = useAuth()

  return (
    <div className={styles.contentGeral}>
      <div className={styles.boxContentGeral}>
        {user?.photo &&  (
          <div>
            <Image src={user.photo} width={100} height={100} />
          </div>
        )}
        <div className={styles.boxContent}>
          {user?.name ? <h2>{user.name}</h2> : <h2>Logar</h2>}
        </div>
        <div className={styles.boxPhoto} onClick={() => {
          if (user) {
            alert('Fazer função de logou')
          } else {
            route.push('/login')
          }
        }}>
          {user ? 'Logout' : 'Login'}
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