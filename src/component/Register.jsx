import { useState } from 'react';

const Register = () => {
const [userNameInput, setUserNameInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');
const [locationInput, setLocationInput] = useState('');

  const registerUser = async (event) => {
    event.preventDefault();

    const createResponse = await fetch('https://green-scene.onrender.com/api/auth/register', {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userNameInput,
        password: passwordInput,
        location: locationInput
      })
    });
  }
  return (
    <>
      <h1>REGISTER</h1>
      <form onSubmit={registerUser}> 
        <label>
          
          Username: <input onChange={(event) => {setUserNameInput(event.target.value)}}/>
        </label>
        <label>
          Password: <input type="password" onChange={(event) => {setPasswordInput(event.target.value)}}/>
        </label>
        <label>
          Location: <input onChange={(event) => {setLocationInput(event.target.value)}}/>
        </label>
        <button>Register</button>
      </form>
    </>
  )

}

export default Register;