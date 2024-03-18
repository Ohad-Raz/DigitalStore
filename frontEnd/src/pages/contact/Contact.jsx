import React from 'react'
// import workInProgress from './workInProgress.png';
import workInProgress from '../../assets/workInProgress.png'; 
import styles from "./Contact.module.css"

function Contact() {
  return (
<div className={styles.contactContainer}>
<img className={styles.workInProgress}  src={workInProgress} alt="work in progress" />
</div>
);
}

export default Contact