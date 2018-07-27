import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

class Avatar extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<span>
				<img src={this.props.image}/>
			</span>
			);
	}
}

class Tweet extends Component {
	constructor(props){
		super(props);

		// it's better to bind "this" in the constructor as opposed to the render function, so we can avoid 
		// creating a brand new function on every render
		//this.handleMouseover = this.handleMouseover.bind(this);
		//this.handleMessageClick = this.handleMessageClick.bind(this);
	}
	handleMouseover(e){
		console.log('mouse over');
	}
	handleMessageClick(message, e){
		console.log('this is the message: ' + message);
	}
	render(){
		// by doing onMouseOver={(e) => this.handleMouseover(e)}
		// instead of onMouseOver={this.handleMouseover}
		// we can avoid having to manually call bind every time.
		// the arrow function lets us bind the function with "this" automatically.
		// we can also pass in parameters to the event handlers.
		return (
			<div className="tweet" onMouseOver={(e) => this.handleMouseover(e)}>


				<Avatar image={this.props.image}/>
				<span onClick={(e) => this.handleMessageClick(this.props.message,e)}>{this.props.message}</span>

				{this.props.handleName}



			</div>
		);
	}
}
export default Tweet;