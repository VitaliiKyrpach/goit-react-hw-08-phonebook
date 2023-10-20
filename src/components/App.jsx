import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/HomePage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};
