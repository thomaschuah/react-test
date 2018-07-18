import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import Toggle from './Toggle';
import Tweet from './Tweet';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

function TextBlock(props){
	return <div>
			<h1>{props.title}</h1>
			<p>{props.body}</p>
		</div>;
}

class SocialCard extends React.Component {
	render() {
		return <h1>Hello {this.props.name}.</h1>;
	}
}

class Clock extends React.Component {
	constructor(props){
		super(props);

		// you can ONLY set the state in the constructor
		this.state = {
			date: new Date()
		};
	}

	// called when component is rendered to the DOM for the first time
	componentDidMount(){
		
		this.timerID = setInterval(() => this.tick(),1000);
	}

	tick(){
		// need to change state? use this.setState(); NOT this.state.propertyname.value
		this.setState({
			date: new Date()
		});
	}

	// called when the DOM produced by the component is removed
	componentWillUnmount(){
		window.clearInterval(this.timerID);
	}

	render() {
		return (
		<div>
			<h1>Hello world</h1>
			<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		</div>
		);
	}
}


ReactDOM.render(<Clock />, document.getElementById("root"));

const element = (
	<div>
	This is a constant.
	</div>
	);

const holder = (
	<div>
		<TextBlock title="my title" body="the body"/>
		<SocialCard name="my name"/>
	</div>
	);

// ReactDOM.render(<TextBlock title="title 123" body="body goes here" />, document.getElementById('root'));
// ReactDOM.render(<SocialCard name="Jerry" />, document.getElementById('social_holder'));
// ReactDOM.render(element, document.getElementById('constant_holder'));
ReactDOM.render(holder, document.getElementById('holder_holder'));
ReactDOM.render(<Toggle/>, document.getElementById('toggle_holder'));
ReactDOM.render(<Counter/>, document.getElementById('counter_holder'));
ReactDOM.render(<Tweet handleName="@ThomasChuah" message="This is my message." image="https://www.gravatar.com/avatar/nothing"/>, document.getElementById('twitter'));
ReactDOM.render(<Login/>, document.getElementById('login_holder'));
registerServiceWorker();
