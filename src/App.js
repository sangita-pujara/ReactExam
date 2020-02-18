import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login'
import {
  ToastProvider, useToasts
} from 'react-toast-notifications'

import {
  Provider
} from 'react-redux'
// import './App.css'
import store from './redux/store'
import ProductsDetailPage from './Components/ProductsDetailPage';
import Search from './Components/Search'



function App() {
  return (
     <Provider store={store}>
      <Router>
        <ToastProvider>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          

            <hr />
            <Switch>
              <Route exact path="/"
              component = {
                Home
              } />
                
             
              < Route exact path = "/login"
              component = {
                Login
              } />


              < Route exact path = "/Search"
              component = {
                Search
              } />
               
             
              <Route
                exact
                path='/product/:id'
                component = {
                  ProductsDetailPage
                }
              />
            </Switch>
          </div>
        </ToastProvider>
      </Router>
     </Provider>

  );
}

export default App;
