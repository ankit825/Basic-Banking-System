import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarHome from './NavbarHome';
import Userprofile from './Userprofile';
import UserMoneyTransfer from './UserMoneyTransfer';

// import Footer from './Footer/Footer';
import Tablelist from './Table/Tablelist';

const Customerlist = () => {
  return (
    <div>
      <NavbarHome />
      <Tablelist />
      <BrowserRouter>
        <Switch>
          <Route exact path="/CreateUser" component={Userprofile} />
          <Route exact path="/TransferMoney" component={UserMoneyTransfer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Customerlist;
