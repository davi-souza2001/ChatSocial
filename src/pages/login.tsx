import UseAuth from '../service/hook/useAuth';

export default function login() {
  const { loginGoogle } = UseAuth();

  return (
    <div>
      <div>
        <div onClick={loginGoogle}>
          <h2>Login</h2>
        </div>
      </div>
    </div>
  );
}
