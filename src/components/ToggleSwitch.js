import React from "react";

export default class ToggleSwitch extends React.Component {


    state = {
        isToggled: false
    };
    
    
    toggleSwitch = () =>{
        const state = Object.assign({}, this.state);
        state.isToggled = !state.isToggled;
        this.setState(state);
        if (state.isToggled){
            document.getElementById('main-nav').classList.remove("dkpink-bkg");
            document.getElementById('main-nav').classList.add("dkgreen-bkg");
            document.body.classList.remove("pink-theme");
            document.body.classList.add("green-theme");
            document.getElementById('info-box').classList.remove("ltpink-bkg");
            document.getElementById('info-box').classList.add("ltgreen-bkg");
            document.getElementById("myonoffswitch").setAttribute('value', true);
        }
        else{
            document.getElementById('main-nav').classList.remove("dkgreen-bkg");
            document.getElementById('main-nav').classList.add("dkpink-bkg");
            document.body.classList.remove("green-theme");
            document.body.classList.add("pink-theme");
            document.getElementById('info-box').classList.remove("ltgreen-bkg");
            document.getElementById('info-box').classList.add("ltpink-bkg");
            document.getElementById("myonoffswitch").setAttribute('value', false);
        }
    };
    
    render(){
        return(
            <div className="toggle-switch form-group row">
                <label htmlFor="themeToggle">
                    Dont like this theme? Try: </label>
                    <div className="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked
                        onClick={this.toggleSwitch}/>
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                    </div>
            </div>
        )
    };

    componentDidMount(){
        document.getElementById("myonoffswitch").setAttribute('value', false);  
    };
};