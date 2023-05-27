import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/loginForm/LoginForm';
import css from 'pages/login/Login.module.css';
const Login = () => {
  return (
    <div className={css.loginPage}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
export default Login;
