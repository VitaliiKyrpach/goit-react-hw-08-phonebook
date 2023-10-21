import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className="link" to="/contacts">
            Contacts
          </NavLink>
        )}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
