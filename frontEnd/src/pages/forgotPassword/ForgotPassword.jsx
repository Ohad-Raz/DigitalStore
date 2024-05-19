import React from 'react'
import ForgotPasswordActions from '../../components/forgotPasswordComponents/forgotPasswordActions'
import styles from "./Forgot.module.css"

function ForgotPassword() {
  return (
    <div>    <div className={styles.Container}><ForgotPasswordActions/></div></div>
  )
}

export default ForgotPassword