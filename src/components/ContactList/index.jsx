import { ContactListItem } from 'components/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
export const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {filtered &&
        filtered.map(({ id, name, phone }) => {
          return <ContactListItem key={id} id={id} user={name} phone={phone} />;
        })}
    </ul>
  );
};
