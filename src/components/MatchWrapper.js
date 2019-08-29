import React from "react";
import axios from 'axios';
import MatchCard from './MatchCard';


export default class MatchWrapper extends React.Component {

    state = {matches: []};
    
    goToDetails(){
        window.location.assign("/loggedin/");  
    };

    
    getMatches = () => {
        const state = Object.assign({}, this.state);
        const _this = this;
        let route;
        if(window.location.href.includes('local')){
                route = "http://localHost/api/all"
            } else {
                route = "https://tomtestapi.herokuapp.com/api/all";
            }
        return axios.get(route, {
            method: 'GET',
                
                    //  {
                    //     "Access-Control-Request-Method": "POST",
                    //     "Content-Type": "application/json"
                    // },
                })
                .then(function(res){
                    state.matches = res.data;
                    _this.setState(state);    
                })
                .catch(function(err){
                    console.log(err);
                });    
                
    };

    render(){
        let matches = "";
        if (this.state.matches.length){ 
            let userName = window.localStorage.getItem('userName');
            matches = this.state.matches.map(match=>(
                match.userName === userName ? false :
            <MatchCard key= {match.id} id={match.id} userName={match.userName} distance = {'unknown distance'} gender = {match.gender} summary = {match.intro}></MatchCard>
            ));
        };
        return(
            <div id="match-wrapper" className="about-us cardWrapper">
                <h3>Your Potential Matches:</h3>
                <hr />
                <button className="btn btn-lg mr-2 register-button" onClick= {this.getMatches}>Load Potential Matches</button>
                <button className="btn btn-lg mr-2 register-button" onClick= {this.goToDetails}>Cancel</button>
                <div id="card-root">
                    {matches}
                </div>
            </div>
        );
    };

   
    
}
