import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations'; 
import { selectIsLoading } from 'redux/selectors'; 
import s from './style.module.css'

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.phonebookContacts}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}