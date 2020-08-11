import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Product from './components/Product';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Product}></Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
