
import './App.css';
import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home';
import Book from './pages/book';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/book" component={Book} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App;

/*
 <div class="row">
      <img src="./0.jpg" class="rounded  mx-auto d-block" alt="Cinque Terre" width="400" height="600"></img>
      <div class="col-12">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <NavLink to="/home" className="list-group-item">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/book" className="list-group-item">Book</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/management" className="list-group-item">Management</NavLink>
          </li>
        </ul>
      </div>
    </div>
*/