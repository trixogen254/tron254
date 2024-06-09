import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const registerUser = () => {
    axios.post('https://tron254-backend-5d548a883f2f.herokuapp.com/register', { username })
      .then(response => {
        setMessage('User registered successfully');
      })
      .catch(error => {
        setMessage('Error registering user');
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <input 
        type="text" 
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter unique username"
      />
      <button onClick={registerUser}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Registration;
