import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectError, selectIsLoading} from './redux/selectors'
import {fetchContacts} from './redux/operations'
import s from './Add.module.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
       <br />
      {isLoading && !error && <b>Request in progress...</b>}
      <br />
      {error && <b>Error: {error}</b>}
      <ContactList />
    </div>
  );
}

export default App;
