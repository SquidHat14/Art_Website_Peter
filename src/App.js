import Title from './Title/Title';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
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

  componentDidMount()
  {
    try
    {
        fetch('http://localhost:5001/test')
        .then(res => res.json())
        .then(data =>
            {
                this.images = data.children;
                console.log(this.images);
                this.setState(
                  {reload: true},
                  () => this.setState({reload: false})
                )
            });
    }
    catch(err)
    {

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

          <Route path="/Dashboard">
                        <Title/>
                        {this.Dashboard()}
                        </Route>

          <Route path="/">
                        <Title/>
                        {this.Navbar()}
                        </Route>
          </Switch>
      </Router>
      </div>
    );
  }

  Navbar = () => { return (this.images ? <Navbar images = {this.images}></Navbar> : '');};

  Dashboard = () => { return (this.images ? <Dashboard images = {this.images}></Dashboard> : '');};
}

export default App;