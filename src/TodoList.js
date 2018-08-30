import React, { Component } from 'react';
/*
What state do we need?

What data do we have?
- the list of todo items  [state]
- titles of the tables
- the text of the new todo item [state]
*/

class AddItem extends React.Component {
	render(){
		return (
			<div>
				<fieldset>
					<legend>Add Item</legend>
					<label for="item">Add item:</label>
					<input type="text" id="item" onChange={this.props.handleChange} value={this.props.text}/>
					<button onClick={this.props.handleSubmit} >Add</button>
				</fieldset>
			</div>
			);
	}
}

class TodoItem extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		const completedStyle = {
			textDecoration:'line-through'
		};
		let style = {};

		let checkbox;

		if (this.props.mode == "complete"){
			style = completedStyle;
		} else {
			checkbox = <span><input type="checkbox" onChange={this.props.handleCheck}/></span>
		}

		return (
			<div style={style}>
				{this.props.label} 
				{checkbox}
			</div>
			);
	}
}

class TodoTable extends React.Component {
	render(){

		let items = this.props.items;
		let completed = (this.props.mode=="complete") ? true : false;
		let collection = [];
		

		items
			.filter(item => {
				console.log(item.label + " ... " + item.completed)
				return item.completed == completed;
			})
			.forEach((item)=>{
				collection.push(<TodoItem onChange={this.props.handleCheck} mode={this.props.mode} key={item.label} label={item.label} />);
			});

		return (
			<fieldset>
				<legend>{this.props.title}
				</legend>
				{collection}
			</fieldset>
		);
	}
}

class TodoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todoItemText:"Buy a bear",
			todoItems: this.props.items
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheck = this.handleCheck.bind(this, 'key');
	}
	handleCheck(param, event){
		let items = this.state.todoItems;

		let selected_item = items.find((item)=>(item.label==param));
		selected_item.completed = true;
		this.setState({
			todoItems: items
		});
	}
	handleChange(event){
		console.log(event.target.value);
		this.setState({
			todoItemText:event.target.value
		});
	}
	handleSubmit(event){
		console.log("adding " + this.state.todoItemText)

		// validation ...
		if (this.state.todoItemText.length==0){
			alert("Can't add air!");
			return;
		}

		let items = this.state.todoItems;
		items.push({
			completed: false,
			label: this.state.todoItemText
		});
		this.setState({
			todoItems: items,
			todoItemText: ""
		});
	}
	render(){
		return (
			<div>
				<AddItem text={this.state.todoItemText} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
				<TodoTable title="To-do items" mode="incomplete" handleCheck={this.handleCheck} items={this.state.todoItems} />
				<TodoTable title="Completed items" mode="complete" handleCheck={this.handleCheck} items={this.state.todoItems} />
			</div>
			);
	}
}

export default TodoApp;