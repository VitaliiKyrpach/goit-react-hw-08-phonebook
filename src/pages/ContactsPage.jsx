import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};
export default Contacts;
