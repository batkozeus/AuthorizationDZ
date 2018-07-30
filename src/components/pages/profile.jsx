import React from 'react';

const styles = {
  page: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Profile = () => (
  <div style={styles.page}>
    <h1>Profile page!</h1>
  </div>
);

export default Profile;
