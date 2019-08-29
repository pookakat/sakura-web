import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from './Register';
import NavBar from './NavBar';
import AboutUs from "./AboutUs";

function Welcome() {
  return <AboutUs />;
}

function RegisterUser() {
  return <Register />;
}


function NoUserRouter(){
    return (
        <div>
            <NavBar />
            <Router>
                <div>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/Register/" component={RegisterUser} />
                </div>
            </Router>
        </div>
      );
};

export default NoUserRouter;