import css from 'components/contactsListItem/contactsListItem.module.css';
import PropTypes from 'prop-types';
const ContactsListItem = ({ contact, onDeleteContact }) => (
  <li className={css.listItem}>
    {contact.name} : {contact.number}
    <button
      className={css.deleteBtn}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);
ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsListItem;
