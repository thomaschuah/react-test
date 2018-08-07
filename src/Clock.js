import React, { Component } from 'react';

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date()
		};
	}
	// called when component is being rendered to DOM for first time
	componentDidMount() {
		// doesn't participate in the data flow, so declare outside of props and state
		this.timerID = setInterval(
			() => this.tick(),
			1000
			);
	}
	// called when component is being removed from the DOM
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({date : new Date()});
	}
  render() {
  	// window.setInterval(()=>{
  	// 	//this.state.date = new Date().toLocaleTimeString();
  	// 	console.log("resetting time string");
  	// 	this.setState({
  	// 		date: new Date()
  	// 	});
  	// },2000);
    return (
      <div>
        <h1>Hello, {this.props.name}!!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;