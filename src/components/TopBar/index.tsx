import route from 'next/router'
import TopBar from './TopBar.style'

export default function ButtonAppBar() {
  return (
    <TopBar>
      <div>
        <div>
          ChatSocial
        </div>
        <div onClick={() => route.push('/login')}>
          Login
        </div>
      </div>
      <div>
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
    </TopBar>
  );
}