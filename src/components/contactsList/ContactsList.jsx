import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from 'components/contactsListItem/contactsListItem';
import css from 'components/contactsList/ContactsList.module.css';
import { deleteContact } from 'redux/operations';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.trim().toLowerCase())
    );
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
