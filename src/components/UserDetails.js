import React from "react";
import axios from 'axios';

export default class UserDetails extends React.Component {
    goToUpdate(){
        window.location.assign("/loggedin/updateInfo/");  
    };
    goToMatches(){
        window.location.assign("/loggedin/findMatches/");  
    };
    getUserInfo = () => {
        const state = Object.assign({}, this.state);
        let user = window.localStorage.getItem('userName');
        var userInfo = {};
        let route;
        if(window.location.href.includes('local')){
                route = `http://localHost/api/user-profiles/${user}`
            } else {
                route = `/api/user-profiles/${user}`;
            }
        axios.get(route, {
            method: 'GET',
                
                    //  {
                    //     "Access-Control-Request-Method": "POST",
                    //     "Content-Type": "application/json"
                    // },
                    params:{
                    user: user,
                    }
                })
                .then(function(res){
                    userInfo = res.data[0];
                    state.userInfo = userInfo;
                    document.getElementById('userFullName').innerText = state.userInfo.firstName + " " + state.userInfo.lastName;
                    document.getElementById('userEmail').innerText = state.userInfo.email;
                    document.getElementById('userAddress').innerText = state.userInfo.location;
                    if (state.userInfo.hasGarden === false){
                        document.getElementById('hasGarden').innerText = 'You are Looking for a Garden';
                    }
                    else{
                        document.getElementById('hasGarden').innerText = 'You have a garden you need help with';
                    }
                })
                .catch(function(err){
                    console.log(err);
                });    
    };
    
    render(){
        return(
            <div id="user-page" className="about-us" onLoad={this.getUserInfo}>
                <h3>Your Details</h3>
                <hr />
                <ul id="user-details">
                    <li>Your Name: <span id="userFullName"></span></li>
                    <li>Your Email: <span id="userEmail"></span></li>
                    <li>Your Address: <span id="userAddress"></span></li>
                    <li id="hasGarden"></li>
                </ul>
                <hr />
                <h3> You can:</h3>
                <div id="choices">
                <button className="btn btn-lg mr-2 register-button" onClick={this.goToUpdate}>Update</button>
                <button className="btn btn-lg mr-2 register-button" onClick={this.goToMatches}>Find Your Matches</button>
                </div>
            </div>
        );
    };
    componentDidMount(){
        this.getUserInfo();    
    }
};
