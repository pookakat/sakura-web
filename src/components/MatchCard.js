import React from "react";
//import axios from 'axios';

function handleClick(event){
    event.preventDefault();
    var idClicked = event.srcElement.id;
    console.log(idClicked + "has been clicked");
    /*let route;
    if (window.location.includes('local')){
route = 'http://localHost/api/user-profiles/'
    } else {
        route = '/api/user-profiles/'
    }
    axios.get(route + id).then(function(res){
        //put some rendering stuff here for a button to click 'connect' or something
    }).then(function(res){
        let routed ;
        let newConnection = {
            userInitiating: window.localStorage.getItem('user-id'),
            userReceiving: id.id,
            accepted: false
        }
        if(window.location.includes('local')){
routed = 'http://localHost/api/connections'
        } else {
            routed = 'api/connections';
        }
        axios.post( routed, newConnection ).then(function(response){
        })
    })*/
};

function MatchCard(props){
    
    return(
        <div className = "card" id={props.id} onClick={handleClick} >
            <h3>{props.userName}</h3>
            <span>{props.distance},</span>
            <span>{props.gender},</span> 
            <span>{props.summary}</span> 
        </div>
    )
}
export default MatchCard;