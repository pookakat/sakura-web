import React from "react";
import axios from 'axios';

function setState(){
    if (window.localStorage.getItem('userName')){
        var state = {
            isLoggedIn: true
        };
    }
    else{
        state = {
            isLoggedIn: false
        };
    };
    return state;
};


export default class UserDetails extends React.Component {
    state = setState();
    checkLogin = (event) => {
        event.preventDefault();
  
        const state = Object.assign({}, this.state);
        const _this = this;

        const {uName, password} = document.getElementById("loginForm");
        const user=uName.value;
        if(uName.value && password.value){
        let route;
            if(window.location.href.includes('local')){
                route = "http://localHost/api/login"
            } else {
                route = "https://sakura-api.herokuapp.com/api/login";
            }
            axios.get(route, {
            method: 'GET',
            
            //  {
            //     "Access-Control-Request-Method": "POST",
            //     "Content-Type": "application/json"
            // },
            params:{
                uName: user,
                password: password.value
            }
        })
        .then(function(res){
            const userName = res.data[0].userName;
            const theme = res.data[0].theme;
            window.localStorage.setItem('userName', userName);
            window.localStorage.setItem('theme', theme);
            state.isLoggedIn = true;
            _this.setState(state);
            window.location.assign("/loggedin"); 
        })
        .catch(function(err){
        });
        }
        else{
        alert('Please input both a username and a password');
        }
    };
   
    LogOut = (event) => {
        const state = Object.assign({}, this.state);
        const _this = this;
        state.isLoggedIn = false;
        window.localStorage.clear();
        _this.setState(state);
        window.location.assign("/"); 
    };

    render(){
        const state = Object.assign({}, this.state);
        if (!state.isLoggedIn) {
            return(
                <form className="form-inline my-2 my-lg-0" id="loginForm" onSubmit={this.checkLogin}>
                    <div id="inputs">
                        <input className="form-control mr-sm-2" type="text" placeholder="User Name" id="uName" autoComplete="off" aria-label="Search"  />
                        <input className="form-control mr-sm-2" type="password" placeholder="Password" id="password" autoComplete="off" aria-label="Search"  />
                    </div>
                    <button id="login-button" className="btn my-2 my-sm-0 ltpink-bkg dkpink-txt" type="submit">Login</button>
                </form>
            )
            }
        return (
            <form className="form-inline my-2 my-lg-0" id="logoutForm">
                <button id="logout-button" className="btn my-2 my-sm-0 ltpink-bkg dkpink-txt" type="submit" onClick={this.LogOut}>Log Out</button>
            </form>
        )    
    };
}