




  
  function Login () {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  export default Login;
  
  