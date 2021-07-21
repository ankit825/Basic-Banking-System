import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TransferMoney from './Transfer/TransferMoney';
// eslint-disable-next-line import/no-cycle
import Userprofile from './Userprofile';

const UserMoneyTransfer = () => {
  return (
    <div>
      <Navbar />
      <TransferMoney />
      <BrowserRouter>
        <Switch>
          <Route exact path="/CreateUser" component={Userprofile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default UserMoneyTransfer;
