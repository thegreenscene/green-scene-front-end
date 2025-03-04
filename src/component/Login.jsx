import { useState } from "react";

//displays a Login form
const Login = () => { 
  const [inputUser, setInputUser] = useState('');
  const [inputPass, setInputPass] = useState('');

const loginAttempt = async (event) => {
  event.preventDefault();

  const responseAttempt = await fetch('https://green-scene.onrender.com/api/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: inputUser,
      password: inputPass
    })
  });
  const tokenObject = await responseAttempt.json();
  
  if(tokenObject.token){
    localStorage.setItem('token', tokenObject.token);
  }
}

  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={loginAttempt}> 
        <label>
          Username: <input onChange={(event) => {setInputUser(event.target.value)}}/>
        </label>
        <label>
          Password: <input type="password" onChange={(event) => {setInputPass(event.target.value)}}/>
        </label>
        <button>Log In</button>
      </form>
    </>
  )
}

export default Login;