import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Icons from './helpers/icons';
import NavComponent from "./navigation/Nav-links";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';






const App = () => {
  Icons()

  return (
    <div className='app'>
      <Router>
        <div>
          <NavComponent/>
          {/* <NavBarMenu/> */}
        </div>
        <Switch>
          <Route exact path="/" render={props => (
              <Home {...props}/> 
            )}
          />
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} /> 
          

        </Switch>
      </Router>
    </div>
  );

}

export default App;