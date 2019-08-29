import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import axios from 'axios';

export default class UserDetails extends React.Component {
    
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
                })
                .catch(function(err){
                    console.log(err);
                });    
    };

    goToUpdate(){
        window.location.assign("/loggedin/update");  
    };

    goToDetails(){
        window.location.assign("/loggedin/");  
    };

    render(){
        return(
            <div id="user-details" className="register" onLoad={this.getUserInfo}>
                <form id="updateForm">
                <div className="form-group">
                        <label className="control-label twenty">I am a: </label>
                            <label className="radio-inline">
                            <input className="mr-3" type="radio" value="male" name="gender" />Male
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" value="female" name="gender" />Female
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" value="non-binary" name="gender" />Non-Binary
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" value="not-given" name="gender" />Prefer not to say
                            </label>
                    </div>
                    <div className="form-group">
                        <label className="control-label twenty">I like to Plant: </label>
                            <label className="radio-inline">
                            <input className="mr-3" type="radio" id = "flowers" name="plantPref" onClick={this.hideProduce}/>Flowers
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" id = "produce" name="plantPref" onClick={this.showProduce}/>Produce
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" id = "both" name="plantPref" onClick={this.showProduce}/>Both
                            </label>

                            <div id="produceChoices" className="produce">
                                <p>What types of produce?</p> 
                                <div className="choices types-of-produce">
                                    <label className="radio-inline">
                                    <input className="mr-3" type="checkbox" name="tomatoes" id="tomatoes" />Tomatoes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cucumbers" id="cucumbers" />Cucumbers
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="sweet-peppers" id="sweetPeppers" />Sweet Peppers
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="beans" id="beans"  />Beans
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="peas" id="peas" />Peas
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="carrots" id="carrots" />Carrots
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="squash" id="squash" />Squash
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="lettuce" id="lettuce" />Lettuce
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="broccoli" id="broccoli" />Broccoli
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="watermelon" id="watermelon" />Watermelon
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="onion" id="onion" />Onion
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="sweet-corn" id="sweetCorn" />Sweet Corn
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cabbage" id="cabbage" />Cabbage
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="potatoes" id="potatoes" />Potatoes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="radishes" id="radishes" />Radishes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="mint" id="mint" />Mint
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="basil" id="basil" />Basil
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cilantro" id="cilantro" />Ciliantro
                                    </label>


                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="beets" id="beets" />Beets
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="zucchini" id="zucchini" />Zucchini
                                    </label>
                                
                                </div>
                
                            </div>
                        
                    </div>

                    <div className="form-group">
                        <label className="control-label twenty">Do you have a garden?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" value="true" name="garden-having" id="yes-garden" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" value="false" name="garden-having" id="no-garden" />No
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="control-label twenty">Organic Produce?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" name="organic" id="yes-organic" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" name="organic" value="false"/>No
                        </label>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="time" className="col-sm-3">Available Hours</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="number" placeholder="Avg available times per week" name="time" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dateOfBirth" className="col-sm-3">Date of Birth</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Date of Birth" id="dateOfBirth"    name="dateOfBirth" type="date" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="city" className="col-sm-3">Mailing Address</label>
                        <div className="col-sm-9">
                        <input className="form-control" placeholder="Full Address with City and State" name="city" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-3">E-Mail Address</label>
                        <div className="col-sm-9">
                        <input className="form-control" placeholder="Email" name="email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-3">Old Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" name="old-password" placeholder="Old Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-3">Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" name="password" placeholder="New Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="confirmPassword" className="col-sm-3">Confirm Password</label>
                        <div className="col-sm-9">
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm New Password" />
                        </div>
                    </div>

                    <ToggleSwitch />
                        
                    <div className="form-group text-center">
                        <button className="btn btn-success mr-2" id="update" type="submit" >Update<i className="fa fa-spinner fa-spin"></i></button>
                        <button className="btn btn-danger" type="button" onClick={this.goToDetails}>Cancel</button>
                    </div>
    
                </form>
            </div>
        );
    };
    componentDidMount(){
        this.getUserInfo();    
    };
};
