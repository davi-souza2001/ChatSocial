import Image from 'next/image';
import UseAuth from '../../service/hook/useAuth';
import UseChat from '../../service/hook/useChat';
import styles from './Users.module.scss';

export default function index() {
  const { users, user } = UseAuth();
  const { setMessageUserUnic, menuMobile } = UseChat();

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
    <div className={`${styles.users} ${menuMobile ? '' : styles.ativo}`}>
      <ul>
        <li
          onClick={() => {
            setMessageUserUnic({ name: 'Geral' });
          }}
        >
          <h1>Chat geral</h1>
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
                <h1>{userUni.name.nameClean().nameCleaned()}</h1>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
