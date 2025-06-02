import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning!'
    } else if (hour < 18) {
      return 'Good day!'
    } else {
      return 'Good evening!'
    }
  };

  return (
    <Card className={classes.home}>
      <h1>{getGreeting()}, {props.userEmail}</h1>
    </Card>
  );
};

export default Home;
