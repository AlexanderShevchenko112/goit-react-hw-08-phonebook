import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactsList/ContactsList';
import Filter from 'components/filter/Filter';

const Phonebook = () => {
  return (
    <>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <h2>Phonebook</h2>
      <ContactList />
    </>
  );
};

export default Phonebook;
