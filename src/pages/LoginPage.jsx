const Login = () => {
  return (
    <form>
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
