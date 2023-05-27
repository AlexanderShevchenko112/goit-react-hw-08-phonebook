import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactsList/ContactsList';
import Filter from 'components/filter/Filter';
import css from 'components/phonebook/Phonebook.module.css';
const Phonebook = () => {
  return (
    <>
      <div className={css.phonebookContainer}>
        <ContactForm />
        <Filter />
        <h2 className={css.phonebookTitle}>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
};

export default Phonebook;
