import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/NavigationBar';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navbar}></Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
