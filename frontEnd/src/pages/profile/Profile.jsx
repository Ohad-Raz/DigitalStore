import React from 'react'
import workInProgress from '../../assets/workInProgress.png'; 
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div>
      {/* <div>Profile</div> */}
    <div>
    <div className={styles.ProfileContainer}>
      <img className={styles.workInProgress}  src={workInProgress} alt="work in progress" />
    </div></div>
    </div>
  )
}

export default Profile