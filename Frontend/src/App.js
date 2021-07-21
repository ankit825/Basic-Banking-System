import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './component/Main';
import Customerlist from './component/Customerlist';
import Userprofile from './component/Userprofile';
import UserMoneyTransfer from './component/UserMoneyTransfer';
import UserSearch from './component/UserSearch';
import Transaction from './component/Transaction';
import UserHistory from './component/UserHistory';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Search" component={UserSearch} />
        <Route exact path="/" component={Main} />
        <Route exact path="/Customerlist" component={Customerlist} />
        <Route exact path="/CreateUser" component={Userprofile} />
        <Route exact path="/TransferMoney" component={UserMoneyTransfer} />
        <Route exact path="/Success" component={Transaction} />
        <Route exact path="/History" component={UserHistory} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
