import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoggedIn from './components/LoggedIn';
import NoUser from './components/NoUser';

function Index() {
  return <NoUser />;
}


function UserLoggedIn(){
  return <LoggedIn />;
}

function AppRouter() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/LoggedIn/" component={UserLoggedIn} />
          </div>
        </Router>
      </div>
    );
};

export default AppRouter;