import Title from './Title/Title';
import Navbar from './Navbar/Navbar';
import { Component } from "react";
import React from "react";
import './_App.scss';
import './fonts.scss';

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
      <Title />
      <Navbar />
      </div>
    );
  }
}

export default App;