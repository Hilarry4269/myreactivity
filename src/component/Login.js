




  
  // function Login () {
  //   return (
  //     <div>
  //       <h1>Login</h1>
  //       <form>
  //         <label htmlFor="username">Username:</label>
  //         <input type="text" id="username" name="username" />
  //         <br />
  //         <label htmlFor="password">Password:</label>
  //         <input type="password" id="password" name="password" />
  //         <br />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
  // }
  // export default Login;
  
  // import React, { useState } from 'react';

  // function Login () {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Add your logic for handling the form submission here
  //     console.log(username, password);
  //   };
  
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="username">Username:</label>
  //         <input
  //           type="text"
  //           id="username"
  //           value={username}
  //           onChange={(event) => setUsername(event.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password:</label>
  //         <input
  //           type="password"
  //           id="password"
  //           value={password}
  //           onChange={(event) => setPassword(event.target.value)}
  //         />
  //       </div>
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };
  
  // export default Login;


//   import React, { useState } from 'react';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform some validation and update the error state if necessary
//     if (username === '' || password === '') {
//       setError('Username and password are required');
//     } else {
//       // Call an API to log in the user, for example
//       console.log(`Logging in with username: ${username} and password: ${password}`);
//       setError('');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {/* <form onSubmit={handleSubmit}>
      //   <label htmlFor="username">Username:</label>
      //   <input type="text" id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      //   <br />
      //   <label htmlFor="password">Password:</label>
      //   <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      //   <br />
      //   {error && <p>{error}</p>}
      //   <button type="submit">Submit</button>
      // </form> */}
    // {/* </div>
//   );
// }

// export default Login; */}



import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
