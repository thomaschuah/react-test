import React, { Component} from 'react';

class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: "Thomas",
			names: [],
			comments: "",
			fruit: "coconut"
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeComments = this.handleChangeComments.bind(this);
		this.handleChangeFruit = this.handleChangeFruit.bind(this);
	}
	componentDidMount(){

	}
	componentWillUnmount(){
		
	}
	handleChangeFruit(event){
		this.setState({fruit:event.target.value});
	}
	handleChangeComments(event){
		this.setState({comments:event.target.value});
	}
	handleChange(event){
		// this is how to get value of the textfield onchange of the textfield value
		let element_name = event.target.name;


		this.setState({
			[element_name] : event.target.value
			
		});
	}
	handleSubmit(event){
		alert(this.state.name + " said \"" + this.state.comments + "\" and he/she likes to eat " + this.state.fruit);


		let names = this.state.names;
		names.push(this.state.name);

		this.setState({
			names: names
		});

		event.preventDefault();

	}
	render(){
		let names;

		names = this.state.names;


		names = names.map((name,index) => <li key={index}>{name}</li>);
			

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label for="name">Name:</label>
					<input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>

					<label for="comments">Comments:</label>
					<textarea id="comments" name="comments" onChange={this.handleChange}>{this.state.comments}</textarea>

					<label for="fruit">Favourite fruit:</label>
					<select value={this.state.fruit} onChange={this.handleChange} id="fruit">
						<option value="grapefruit">Grapefruit</option>
						  <option value="lime">Lime</option>
						  <option value="coconut">Coconut</option>
						  <option value="mango">Mango</option>
					</select>

					<input type="submit" value="Submit Me" />
				</form>
				<fieldset>
				<legend>Names entered so far</legend>
				<ul>
					{names}
					</ul>
				</fieldset>

			</div>
			);
	}
}
export default Form;
