import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <h2>
      {isLoggedIn
        ? 'Now you are ready to use your contacts'
        : 'Please sign in to access your contacts'}
    </h2>
  );
};
export default Home;
