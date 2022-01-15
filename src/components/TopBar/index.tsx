import route from 'next/router'

import styles from './TopBar.module.css'

export default function ButtonAppBar() {
  return (
    <div className={styles.contentGeral}>
      <div className={styles.boxContentGeral}>
        <div className={styles.boxContent}>
          ChatSocial
        </div>
        <div className={styles.boxPhoto} onClick={() => route.push('/login')}>
          Login
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