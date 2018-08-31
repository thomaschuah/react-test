import React, { Component } from 'react';
import axios from 'axios';

class Reddit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts:[]
		};
	}
	componentDidMount(){
		axios.get(`https://www.reddit.com/r/reactjs.json`).then(
			(res) => {
				const posts = res.data.data.children.map((obj)=>obj.data);
				this.setState({posts});
			});
	}
	render(){
		
		return (
			<div>
				<ul>
					{this.state.posts.map((item)=>(<li key={item.id}>{item.title}</li>))}
				</ul>
			</div>
			);
	}
}

export default Reddit;