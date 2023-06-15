import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import s from './ContactLlist.module.css'

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  

  return (
    <ul className={s.listContact}>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem id={id} key={id}  name={name} number={number}/>
      ))}
    </ul>
  );
}

export default ContactList;
