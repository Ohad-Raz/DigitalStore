import React, { useState } from 'react';
import axios from 'axios';
import styles from './ForgotPasswordActions.module.css'; // Import CSS styles
import { APIBaseUrl } from '../../config';

const ForgotPasswordActions = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resetBtn, setResetBtn] = useState('Reset Password');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResetBtn(<img src='./Rolling-2.1s-204px.gif'/>); // Change button to loading state

    // Send POST request to the backend
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${APIBaseUrl}/users/forgot-password`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {"email": email}
    };

    axios.request(config)
      .then((response) => {
        setMessage(`An email has been sent with instructions to reset your password.`);
        setEmail('');
        setResetBtn('Reset Password');
      })
      .catch((error) => {
        setMessage(error.response.data.error);
        setResetBtn('Reset Password');
      });
  };

  return (
    <div className={styles.resetPassword}>
      <h1>Forgot Password</h1>
      <div>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.resetBtn} type="submit">{resetBtn}</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordActions;
