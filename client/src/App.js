import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Toolbar from "./components/layout/toolbar/Toolbar";
import Landing from "./components/landing/Landing";
import Beers from "./components/beer/beers/Beers";
import Beer from "./components/beer/beer/Beer";
import Brewery from "./components/brewery/Brewery";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Toolbar />
            <Route exact path="/" component={Landing} />
            <main>
              <Route exact path="/beers/search/:q" component={Beers} />
              <Route exact path="/beer/:id" component={Beer} />
              <Route exact path="/brewery/:id" component={Brewery} />
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
