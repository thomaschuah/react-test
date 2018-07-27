import React, { component } from 'react';

function BlogPost(props){
	return (
		<li>
			<ul>
				<li>{props.title}</li>
				<li>{props.content}</li>
			</ul>
		</li>
		);
}

class Blog extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let posts = this.props.posts;

		posts = posts.map((post) => <BlogPost id={post.id} title={post.title} content={post.content}/>);

		return (
			<ul>
				{posts}
			</ul>
			);
	}
}

export default Blog;