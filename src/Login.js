import React, { Component } from 'react';

function LoggedInMessage(props){
	return (
		<button onClick={props.onClick}>
			Log Out
		</button>
		);
}
function LogInMessage(props){
	return (
		<button onClick={props.onClick}>
			Log In
		</button>
		);
}

class Login extends React.Component {
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.state = {
			isLoggedIn : false
		}
	}
	login(e){
		this.setState({
			isLoggedIn : true
		});
	}
	logout(e){
		this.setState({
			isLoggedIn : false
		});
	}
	render(){
		
		let component;
		if (this.state.isLoggedIn){
			component = <LoggedInMessage onClick={this.logout}/>;
		} else {
			component = <LogInMessage onClick={this.login}/>;
		}

		return (
			<div>
				{component}
			</div>
			);
	}

}

export default Login;