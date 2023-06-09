import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Phonebook from 'components/phonebook/Phonebook';
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div>{isLoading && 'Loading...'}</div>
      <Phonebook />
    </>
  );
};

export default Contacts;
