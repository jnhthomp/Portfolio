import logo from './logo.svg';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className={classes.tallTest}>
        <Navbar />
      </div>
    </React.Fragment>
  );
}

export default App;
