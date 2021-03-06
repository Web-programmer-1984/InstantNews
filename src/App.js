import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
 
    return (
      <>
        <Router>
          <NavBar></NavBar>

          <Switch>
          <Route exact path="/"><News key="general"  pageSize={100} country="in" category='general'></News></Route>
          <Route exact path="/business"><News key="business"  pageSize={36} country="in" category='business'></News></Route>
          <Route exact path="/technology"><News key="technology"  pageSize={36} country="in" category='technology'></News></Route>
          <Route exact path="/entertainment"><News key="entertainment"  pageSize={36} country="in" category='entertainment'></News></Route>
          <Route exact path="/health"><News key="health"  pageSize={36} country="in" category='health'></News></Route>
          <Route exact path="/science"><News key="science"  pageSize={36} country="in" category='science'></News></Route>
          <Route exact path="/sports"><News key="sports"  pageSize={36} country="in" category='sports'></News></Route>
        </Switch>
        </Router>
      </>
    )
  }
}

