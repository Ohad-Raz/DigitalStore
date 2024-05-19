import React from "react";
import DashboardActions from "../../components/dashboardComponents/DashboardActions";
import styles from "./Dashboard.module.css"

function Dashboard() {
  return (
    <div>
      
      <div className={styles.Container}><DashboardActions /></div>
    </div>
  );
}

export default Dashboard;
