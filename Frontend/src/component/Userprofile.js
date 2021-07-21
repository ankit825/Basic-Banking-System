import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavbarCreate from './Navbar/NavbarCreate';
import Createuser from './User/Createuser';
import UserMoneyTransfer from './UserMoneyTransfer';

const Userprofile = () => {
  return (
    <div>
      <NavbarCreate />
      <Createuser />
      <BrowserRouter>
        <Switch>
          <Route exact path="/TransferMoney" component={UserMoneyTransfer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Userprofile;
