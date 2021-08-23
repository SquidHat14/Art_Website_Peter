import Title from './Title/Title';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import { Component } from "react";
import React from "react";
import './_App.scss';
import './_vars.scss';
import './fonts.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {  

  static images;

  constructor(props)
  {
    super(props);
    this.state = 
    {
      reload : false
    }
  }

  render()
  {
    return (
      <div>
        <Router>
          


          <Switch>
          <Route path="/login">
                          <Login />
                        </Route>

          <Route path="/">
                        <Title />
                        <Navbar />
                        </Route>
          </Switch>
      </Router>
      </div>
    );
  }
}

export default App;