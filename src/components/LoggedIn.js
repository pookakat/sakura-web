import React from "react";
import UserPageShell from './UserPageShell';
import NavBar from './NavBar';


export default class LoggedIn extends React.Component {
    goToRegister(){
      window.location.assign("/logged-in");  
    };

    changeTheme = (theme) => {
        if (theme === "true"){
            document.getElementById('main-nav').classList.remove("dkpink-bkg");
            document.getElementById('main-nav').classList.add("dkgreen-bkg");
            document.body.classList.remove("pink-theme");
            document.body.classList.add("green-theme");
            document.getElementById('info-box').classList.remove("ltpink-bkg");
            document.getElementById('info-box').classList.add("ltgreen-bkg");
        }
        else{
            document.getElementById('main-nav').classList.remove("dkgreen-bkg");
            document.getElementById('main-nav').classList.add("dkpink-bkg");
            document.body.classList.remove("green-theme");
            document.body.classList.add("pink-theme");
            document.getElementById('info-box').classList.remove("ltgreen-bkg");
            document.getElementById('info-box').classList.add("ltpink-bkg");

        }
    };
    
    render(){
        return(
            <div>
                <NavBar />
                <div id="info-box" className="about-us">
                    <h2>Welcome <span id="userName"></span>!</h2>
                    <UserPageShell />
                </div>
            </div>
        );
    };
    componentDidMount(){
        const currentUser = window.localStorage.getItem('userName');
        const pageTheme = window.localStorage.getItem('theme');
        document.getElementById('userName').textContent = currentUser;
        this.changeTheme(pageTheme);
    };
}