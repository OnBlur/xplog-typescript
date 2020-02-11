import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store, routes } from "./_helpers";
import { fetchEntries } from "./store/entries/actions";

import "./assets/css/index.scss";

import App from "./components/App";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import EditEntry from "./components/Entry/EditEntry";
import AddEntry from "./components/Entry/AddEntry";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path={routes.Home} component={Dashboard} />
          <Route exact path={routes.Admin} component={Admin} />
          <Route exact path={routes.Entries} component={AddEntry} />
          <Route exact path={routes.Entry} component={EditEntry} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

fetchEntries();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
