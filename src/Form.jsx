import React from 'react';
import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    console.log(email);
    console.log(password);
  };
  const userHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your Email"
        value={email}
        onChange={userHandler}
      />
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={passwordHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
