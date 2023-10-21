import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="auth">
      <NavLink className="signUp" to="/register">
        Sign Up
      </NavLink>
      <NavLink className="login" to="/login">
        Sigh In
      </NavLink>
    </div>
  );
};
