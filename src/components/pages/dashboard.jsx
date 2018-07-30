import React from "react";

const styles = {
  page: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Dashboard = () => (
  <div style={styles.page}>
    <h1>Dashboard page!</h1>
  </div>
);

export default Dashboard;
