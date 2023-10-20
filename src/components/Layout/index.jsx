import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <UserMenu />
        <AuthNav />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
