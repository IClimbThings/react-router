import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StockOrderDetail from "./components/StockOrderDetail";
import StockOrders from "./components/StockOrders";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={StockOrders} exact />
            <Route path="/detail" component={StockOrderDetail} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 