import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';

import { StateProvider } from '../../state.js';

const App = props => (
  <Route
    render = { ({ location }) => (
        <StateProvider>
          <Header />
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
           <Footer />
        </StateProvider>
    )}
  />
)

export default App;
