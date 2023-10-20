import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Sigh In</NavLink>
    </div>
  );
};
