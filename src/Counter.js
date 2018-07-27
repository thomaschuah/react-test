import React, { Component } from 'react';
import logo from './logo.svg';
import './Counter.css';

function InitialGreeting(props){
	return (
		<h1>You're just getting started, I see.</h1>
		);
}

function GuestGreeting(props){
	return (
		<h1>You've been here before I see.</h1>
		);
}

function ListItem(props){
	let value = props.value;
	return (
		<li>{value}</li>
		);
}

function NumberListing(props){
	let numbers;
	if (props.numbers && props.numbers.length>0){
		numbers = props.numbers;
		numbers = numbers.map((number, index) => <ListItem key={index} value={number} />)

	} else {
		return null;

	}
	
	return (
		<ul>
			{numbers}
		</ul>
		);
}

class Counter extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:0,
			increm:0,
			increments:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){

	}
	componentWillUnmount(){
		
	}
	handleChange(e){
		this.setState({increm:e.target.value});

	}
	handleClick(e){
		this.setState(prevState => ({
			value : parseInt(prevState.value) + parseInt(this.state.increm),
			incrememts : prevState.increments.push(this.state.increm)
		}));
	}

  render() {

  	let greeting;
  	if (this.state.value == 0){
  		greeting = <InitialGreeting/>;
  	} else {
  		greeting = <GuestGreeting />;
  	}

  	

  	let message = (this.state.increments.length>0 && 
  		<div>
  		You've added the following numbers to the counter:
        <ul>
        	<NumberListing numbers={this.state.increments}/>
        </ul>
        </div>
  		);

    return (
      <div className="counter">
      	<span id="label">The current value is {this.state.value}</span>
      	<hr/>
      	<button onClick={this.handleClick}>
      	Increment
      	</button> the counter by
        <input type="text" onChange={this.handleChange} value={this.state.increm}/>
        <hr/>
        {greeting}
        <hr/>
        {message}
        

      </div>
    );
  }
}

export default Counter;
