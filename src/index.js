import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import Counter from './Counter';
import Toggle from './Toggle';
import Tweet from './Tweet';
import Login from './Login';
import Blog from './Blog';
import Searcher from './Searcher';
import registerServiceWorker from './registerServiceWorker';

// can pass children into another dialog
function FancyBorder(props){
	return (
		<div className={'classy classy-' + props.color}>
		{props.children}
		</div>
		);
}
function WelcomeDialog(props){
	return (
		<FancyBorder color='blue'>
			<p>Hello jock</p>
			<p>Hello jill</p>
		</FancyBorder>
		);
}

var divStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'

};


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
// an example of containment; component Panelizer doesn't know its children ahead of time
function Panelizer(props){
	return (
		<div style={divStyle}>
			{props.left}
			{props.right}
		</div>
		);
	
}
function Panely(props){
	return (
		<div>
			{props.text}
		</div>
		);
}

function Dialog(props){
	return (
		<FancyBorder color="black">
			<h1>{props.title}</h1>
			<p>{props.message}</p>
			{props.children}
		</FancyBorder>
		);
}
class SignupDialog extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {value: 'asdf'};
	}
	render(){
		return (
			<Dialog title="Welcome to Auberge Du Pommier!" 
					message="Please enter your name.">
			
				<input value={this.state.value} 
						onChange={this.handleChange}/>

				<button onClick={this.handleClick}>
					Sign Me Up!
				</button>
			
			</Dialog>
			);
	}
	handleChange(event){
		this.setState({ value: event.target.value });
	}
	handleClick(event){
		alert(`Welcome aboard, ${this.state.value}!`);
	}
	
}



// ReactDOM.render(<TextBlock title="title 123" body="body goes here" />, document.getElementById('root'));
// ReactDOM.render(<SocialCard name="Jerry" />, document.getElementById('social_holder'));
// ReactDOM.render(element, document.getElementById('constant_holder'));
ReactDOM.render(holder, document.getElementById('holder_holder'));
ReactDOM.render(<Toggle/>, document.getElementById('toggle_holder'));
ReactDOM.render(<Counter/>, document.getElementById('counter_holder'));
ReactDOM.render(<Tweet handleName="@ThomasChuah" message="This is my message." image="https://www.gravatar.com/avatar/nothing"/>, document.getElementById('twitter'));
ReactDOM.render(<Login/>, document.getElementById('login_holder'));
ReactDOM.render(<Form/>, document.getElementById('form_holder'));

ReactDOM.render(<input value="hi" />, document.getElementById('misc_holder'));
ReactDOM.render(<WelcomeDialog />, document.getElementById('containment_holder'));
ReactDOM.render(
	<Panelizer 
		left={
			<Panely text="left"/>
		} right={
			<Panely text="right"/>
		} />, document.getElementById('complex_containment_holder'));

ReactDOM.render(<SignupDialog />, document.getElementById('signup_dialog_holder'));




const posts = [
{id:1, title:'This is my title', content:'The quick brown fox jumped over the lazy dog.'},
{id:2, title:'This is not my title', content: 'The quick red dog jumped over the lazy fox.'}
];
ReactDOM.render(<Blog posts={posts}/>, document.getElementById('blog_holder'));
registerServiceWorker();
