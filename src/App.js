import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/Error';

import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
