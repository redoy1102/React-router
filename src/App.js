import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Component/No Match/NoMatch';
import FriendDetail from './Component/Friend Detail/FriendDetail';


function App() {
  return (
    <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/friend/:friendId">
              <FriendDetail></FriendDetail>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
