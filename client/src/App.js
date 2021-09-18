import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'

import './App.css';
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
import store from "./redux/store";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/users" />
            </Route>
            <Route path="/users" exact={true} component={Dashboard} />
            <Route path="/users/:id" exact={true} component={UserDetails} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}
