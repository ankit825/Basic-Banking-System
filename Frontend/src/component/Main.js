import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Caro from './carousel/Caro';
import Footer from './Footer/Footer';
import Card from './card/Card';
import Cardinfo from './Cardinfo/Cardinfo';
import Card1 from './card/Card1';

import Userprofile from './Userprofile';

import UserMoneyTransfer from './UserMoneyTransfer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Caro />
      <Card />
      <Cardinfo />
      <Card1 />
      <Footer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/CreateUser" component={Userprofile} />

          <Route exact path="/TransferMoney" component={UserMoneyTransfer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Main;
