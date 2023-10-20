const Register = () => {
  return (
    <form>
      <label>
        UserName
        <input type="text" name="userName" required />
      </label>
      <label>
        Email
        <input type="text" name="email" required />
      </label>
      <label>
        Password
        <input type="text" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
