import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
registerServiceWorker();
