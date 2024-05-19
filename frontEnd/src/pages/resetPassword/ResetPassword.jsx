import React from 'react'
import ResetPasswordActions from '../../components/forgotPasswordComponents/ResetPasswordActions'
import styles from "./Reset.module.css"

function ResetPassword() {
  return (
    <div>    <div className={styles.Container}><ResetPasswordActions/></div></div>
  )
}

export default ResetPassword