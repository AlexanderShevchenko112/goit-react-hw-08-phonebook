import css from 'pages/home/Home.module.css';
import phonebook from 'images/phonebook.png';
const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>Welcome Phonebook!!!</h1>
      <p className={css.homeDescription}>
        Ласкаво просимо на наш сайт Phonebook! Зареєструйтеся або увійдіть, щоб
        мати можливість додавати, шукати та видаляти контакти зручним способом.
        Phonebook - це ваша централізована адресна книга, яка допоможе вам
        організувати ваші контакти легко та ефективно. Приєднуйтесь до нашої
        спільноти вже сьогодні!
      </p>
      <img
        className={css.homeImg}
        src={phonebook}
        alt="phonebook"
        width={600}
        height={600}
      />
    </div>
  );
};
export default Home;
