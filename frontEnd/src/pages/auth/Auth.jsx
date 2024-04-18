import React, { useState } from 'react';
import Register from '../../components/register/Register'
import SignIn from '../../components/signIn/SignIn'
import styles from "./Auth.module.css"

function Auth() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [justRegistered, setJustRegistered] = useState(false); // State to track registration status

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleRegistrationSuccess = () => {
    // Set state to indicate that the user has just registered
    setJustRegistered(true);
    // Show sign-in component
    setShowSignIn(true);
  };


  return (
    <div className={styles.authContainer}>
      {/* Conditional rendering based on registration status */}
      {showSignIn || justRegistered ? <SignIn /> : <Register onRegistrationSuccess={handleRegistrationSuccess} />}
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