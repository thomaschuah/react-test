import React, { Component } from 'react';
import logo from './logo.svg';

class Toggle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isToggleOn : false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	handleClick(e){
		this.setState(prevState => ({
			isToggleOn : !prevState.isToggleOn
		}));
	}
	render(){
		return (
			<button onClick={this.handleClick}>
				The current mode is {this.state.isToggleOn ? "ON" : "OFF"}
			</button>
		);
	}
}
export default Toggle;