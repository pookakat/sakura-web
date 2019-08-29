import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import LoggedIn from './components/LoggedIn';
import NavBar from './components/NavBar';

function Index() {
  return <AboutUs />;
}

function RegisterUser() {
  return <Register />;
}

function UserLoggedIn(){
  return <LoggedIn />;
}

function AppRouter() {
    return (
      <div>
        <NavBar />
        <Router>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/Register/" component={RegisterUser} />
            <Route path="/LoggedIn/" component={UserLoggedIn} />
          </div>
        </Router>
      </div>
    );
};

export default AppRouter;