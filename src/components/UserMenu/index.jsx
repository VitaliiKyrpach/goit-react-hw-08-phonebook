import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className="user">
      <p className="mail">{user.email}</p>
      <button className="logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
