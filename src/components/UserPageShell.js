import React from "react";
import UserDetails from './UserDetails';
import UpdateInfo from './UpdateInfo';
import MatchWrapper from './MatchWrapper';

import { BrowserRouter as Router, Route} from "react-router-dom";
  
function Index() {
    return <UserDetails />;
};
  
function UpdateRegisteredUser() {
    return <UpdateInfo />;
};

function FindMatches() {
    return <MatchWrapper />;
};

function AppRouter() {       
    if (window.localStorage.getItem('userName')){
        return (
            <Router>
                <div>
                    <Route path="/loggedin/" exact component={Index} />
                    <Route path="/loggedin/updateInfo/" exact component={UpdateRegisteredUser} />
                    <Route path="/loggedin/findMatches/" exact component={FindMatches} />
                </div>
            </Router>
        );
    }
    else{
        return(
            <div>
                <h1 className="warn">Error! No user is logged in. Please log in and try again.</h1>
            </div>
        )
    }
};


export default AppRouter;