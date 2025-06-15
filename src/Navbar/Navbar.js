import './Navbar.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { Component } from "react";
import React from "react";

import ImageSection from './../ImageSection/ImageSection'


class Navbar extends Component
{
   static images;

   constructor(props)
  {
    super(props);
    this.state = 
    {
      reload : false,
      activeTab : 'Illustration'
    }
    this.images = props.images;
  }

  componentDidMount()
  {
    this.setState(
        {reload: true},
        () => this.setState({reload: false})
      );
  }

  toggleTab = (e) =>
  {
    this.setState({activeTab : e.target.innerText},
        () => {console.log(this.state.activeTab);}
        );
  }


    render()
    {
        return (
            <Router>
            <div class = "NavArea">
                <div class = "NavMenu">
                    <nav class ="Nav">
                        <ul class="NavList">
                            <li onClick={this.toggleTab}>
                                <Link to="/" class = {`NavLink ${this.state.activeTab === "Illustration" ? "selected" : ""}`}  >Illustration</Link >
                            </li>

                            <li onClick={this.toggleTab}>
                                <Link  to="/Paintings" class = {`NavLink ${this.state.activeTab === "Paintings" ? "selected" : ""}`}  >Paintings</Link >
                            </li>

                            <li onClick={this.toggleTab}>
                                <Link  to="/Comics" class = {`NavLink ${this.state.activeTab === "Comics" ? "selected" : ""}`}  >Comics</Link >
                            </li>

                            <li onClick={this.toggleTab}>
                                <Link  to="/Contact" class = {`NavLink ${this.state.activeTab === "Contact" ? "selected" : ""}`}  >Info/Contact</Link >
                            </li>

                            <li onClick={this.toggleTab}>
                                <Link  to="/Shop" class = {`NavLink ${this.state.activeTab === "Shop" ? "selected" : ""}`}  >Shop</Link >
                            </li>
                        </ul>
                    </nav>

                    <div class = "socials">
                        <img style={{display:"none"}} alt="test" src=""></img>
                        <img style={{display:"none"}} alt="test" src=""></img>
                    </div>

                </div>
            </div>

            <main>
                <Switch>
                        <Route path="/Paintings">
                        {this.Paintings()}
                        </Route>
                        <Route path="/Contact">
                        {this.Contact()}
                        </Route>
                        <Route path="/Shop">
                        {this.Shop()}
                        </Route>
                        <Route path="/Comics">
                        {this.Comics()}
                        </Route>
                        
                        <Route path="/">
                        {this.Illustration()}
                        </Route>
                        
                </Switch>
            </main>

            </Router>
        );
    }

    Illustration = () => {  return (this.images ? <ImageSection images = {this.images}></ImageSection> : '');};

    Paintings = () => { return ( <h2>Paintings</h2> );};

    Comics = () => { return ( <h2>Comics</h2> );};

    Contact = () => { return ( <h2>Contact</h2> );};

    Shop = () => { return ( <h2>Shop</h2> ); };

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

}
  export default Navbar;
  