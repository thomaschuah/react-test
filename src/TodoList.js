import React, { Component } from 'react';

class AddItem extends React.Component {
	render(){
		return (
			<div>
				<fieldset>
					<legend>Add Item</legend>
					<label for="item">Add item:</label>
					<input type="text" id="item"/>
					<input type="button" value="Add"/>
				</fieldset>
			</div>
			);
	}
}

class TodoItem extends React.Component {
	render(){
		return (
			<div>
				{this.props.label} 
				<input type="checkbox"/>
			</div>
			);
	}
}

class TodoTable extends React.Component {


	render(){

		let items = this.props.items;
		let completed = (this.props.mode=="complete") ? false : true;
		let collection = [];

		items.filter(item => (item.completed == completed)).forEach((item)=>{
			collection.push(<TodoItem label={item.label} />);
		});

		return (
			<div>
				{collection}
			</div>
		);
	}
}

class TodoApp extends React.Component {
	render(){
		return (
			<div>
				<AddItem />
				<TodoTable mode="incomplete" items={this.props.items} />
				<TodoTable mode="complete" items={this.props.items} />
			</div>
			);
	}
}

export default TodoApp;