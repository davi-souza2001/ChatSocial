import Image from 'next/image';
import router from 'next/router';
import useAuth from '../../service/hook/useAuth';

export default function ForceAuthentication(props: any) {
  const { user, loading } = useAuth();

  function renderContent() {
    return <>{props.children}</>;
  }

  function renderLoading() {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    console.log('aqui');
    return null;
  }
}
