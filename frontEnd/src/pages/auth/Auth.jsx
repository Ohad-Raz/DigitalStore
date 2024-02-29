import React, { useState } from 'react';
import Register from '../../components/register/Register'
import SignIn from '../../components/signIn/SignIn'
import styles from "./Auth.module.css"

function Auth() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div>
     
      {showSignIn ? <SignIn /> : <Register />}
      <div className={styles.registerSignin}>
        {showSignIn ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleForm}>
          {showSignIn ? "Register" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth