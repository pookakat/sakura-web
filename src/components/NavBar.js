import React from "react";
import LogIn from './LogIn'


export default class NavBar extends React.Component {
    
    render(){
        return(
            <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark dkpink-bkg">
            <a className="navbar-brand" href="/"><span role="img" aria-label="flower">🌸</span> Sakura</a>
            <LogIn />
          </nav>
        );
    }
}

