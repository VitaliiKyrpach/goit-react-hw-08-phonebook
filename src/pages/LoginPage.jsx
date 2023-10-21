import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="text" name="email" required />
      </label>
      <label>
        Password
        <input type="text" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
