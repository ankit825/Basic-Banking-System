import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Customerlist from './Customerlist';
import NavbarHistory from './Navbar/NavbarHistory';
import Success from './Success';

const Transaction = () => {
  return (
    <div>
      <NavbarHistory />
      <Success />
      <BrowserRouter>
        <Switch>
          <Route exact path="/Customerlist" component={Customerlist} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Transaction;
