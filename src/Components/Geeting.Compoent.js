import { Component } from "react";
import { Link } from 'react-router-dom';
import Clock from './Clock.Component';

//Function Component
function Welcome(props) {
    if(props.isLoggedIn)
      return <h1>Welcome {props.name}, to My App</h1>
    else
    return <h1>Please Log In</h1>
}

class Greeting extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoggedIn : false,
          name : ''
        };
    }
    
    handleLoginClick = () => {
        this.setState({isLoggedIn: true, name:''});
        //AutoLogout after 1 Minute
        this.interval = setInterval(
            () => this.autoLogout(), 60000
        );
    }

    //Implementing AutoLogout
    autoLogout = () => {
        this.handleLogoutClick();
    }
    
    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
        clearInterval(this.interval);
    }

    handleOnChange = (e) => {
        this.setState({name: e.target.value});
    }
    
    render() {
        let Button;
        if (this.state.isLoggedIn) {
            Button = <button className="btn" onClick={this.handleLogoutClick}>Logout</button>;
        } else {
            Button = <button className="btn" onClick={this.handleLoginClick}>Login</button>;
        }

        let nameInput;
        if (this.state.isLoggedIn) {
            nameInput = <input className="inp" type="text" onChange={this.handleOnChange} placeholder="Type your name here"/>
        } else {
            nameInput = null;
        }

        return (
            <div className="Container">
                {/*Including a Function Component & passing a prop*/}
                <Welcome name={this.state.name} isLoggedIn={this.state.isLoggedIn}/>
                {/*Including a Class Component*/}
                {nameInput}
                <Clock />
                {Button}
                <br />
                <Link to="/crud"><button className='link'>CRUD</button></Link>
            </div>
        );
    }
}

export default Greeting;