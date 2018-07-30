import React from 'react';

const styles = {
  page: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Home = () => (
  <div style={styles.page}>
    <h1>Welcome!</h1>
  </div>
);

export default Home;
