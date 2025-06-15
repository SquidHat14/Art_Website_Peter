import { Component } from 'react';
import './Login.scss';
import {withRouter} from 'react-router-dom';

 class Login extends Component {

    constructor(props)
    {
      super(props);
      this.state = 
      {
        reload : false
      }
    }

    sumbitLogin = () => {

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username : username, password : password})
        };

        fetch('http://localhost:3001/login', requestOptions)
            .then(response => response.json())
            .then(data =>
                {
                    console.log(data);
                    if(data === true)
                    {
                        this.props.history.push('/Dashboard');
                    }
                }); 
    }

    render()
    {
        return (

                <div id="id01" class="modal">
            
                    <div class="modal-content animate">
                        
                        
                        <div class="imgcontainer">
                        <img src="./../extra_images/squid.svg" alt="Avatar" class="avatar"></img>
                        </div>
                        

                        <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input id="username" type="text" placeholder="Enter Username" name="uname" required />
                        <label for="psw"><b>Password</b></label>
                        <input id="password" type="password" placeholder="Enter Password" name="psw" required />
                        <button type="button" onClick = {this.sumbitLogin}>Login</button>
                        <label><input type="checkbox" checked="checked" name="remember" /> Remember me</label>
                        </div>


                    </div>

                </div>
        );
    }
}
  
export default withRouter(Login);