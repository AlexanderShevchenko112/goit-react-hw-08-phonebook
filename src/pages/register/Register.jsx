import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/registerForm/RegisterForm';
import css from 'pages/register/Register.module.css';
export default function Register() {
  return (
    <div className={css.registerPage}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
