import React, { Component } from 'react';
import axios from 'axios';

import pick from 'lodash/pick';
import _ from 'lodash';

function load_weather(startingDate){

	let apiKey = "f21fe054cd52e6c544659c024cd59f0b";
	let apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=f21fe054cd52e6c544659c024cd59f0b&units=metric";

	
	return new Promise((resolve, reject) => {
		axios.get(apiUrl).then(
			(res) => {
				
				let data = res.data.list;

				// get rid of the unwanted elements from each object
				let results = data.map((item)=>{
					let new_item = _.pick(item,['main','weather', 'dt_txt']);
					new_item.date = new_item.dt_txt;

					delete new_item.dt_txt;
					return new_item;
				});


				// get rid of weather data other than noontime
				let results2 = results.filter((item) => (item.date.includes("12:00:00")));
				resolve(results2);
			}).catch((error) => {
				reject(error);
			});
		});

	

}

class NavButton extends React.Component {
	constructor(props){
		super(props);
		
	}
	render(){
		return (
			<button onClick={this.props.handleClick} data-action={this.props.action}>
				{this.props.label}
			</button>
			);
	}
}

class Day extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let style = {
			border:'1px solid black'
		};
		return (
			<div style={style}>

				<span>
					{this.props.date}
				</span>

				{this.props.weather_icon}

				<div>
					<span>{this.props.high}</span>
					<span>{this.props.low}</span>
				</div>
			</div>
			);
		
	}
}

class DayCollection extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let style = {
			display:'flex',
			flexDirection:'row'
		};

		return (
			<div style={style}>
				{this.props.data.map((day)=>(<Day date={day.date} weather_icon={day.weather[0].main} high={day.main.temp_max} low={day.main.temp_min} />))}
			</div>
			);
	}
}

class WeatherApp extends React.Component {

	

	constructor(props){
		super(props);
		this.state = {
			data: [],
			currentDate: new Date()
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){

		this.reloadData();

		// axios.get(this.apiUrl).then(
		// 	(res) => {
				
		// 		let data = res.data.list;

		// 		// get rid of the unwanted elements from each object
		// 		let results = data.map((item)=>{
		// 			let new_item = _.pick(item,['main','weather', 'dt_txt']);
		// 			new_item.date = new_item.dt_txt;

		// 			delete new_item.dt_txt;
		// 			return new_item;
		// 		});


		// 		// get rid of weather data other than noontime
		// 		let results2 = results.filter((item) => (item.date.includes("12:00:00")));
		// 		// debugger;
		// 		this.setState({data: results2});
				
		// 		console.log(results2);
		// 	});
	}
	reloadData = () => {
		let this_ref = this;

		load_weather(this.state.currentDate).then((result) => {
			debugger;
			this_ref.setState({data: result});
			
		}).catch((error) => {
			console.log("error: " + error);
		});
	}
	handleClick(event){
		debugger;
		let action = event.target.dataset.action.toLowerCase();
		let currentDate = this.state.currentDate;

		if (action == "prev"){
			currentDate.setDate(currentDate.getDate() - 5);
			
		} else {
			currentDate.setDate(currentDate.getDate() + 5);
		}

		this.setState({
			currentDate: currentDate
		});

		this.reloadData();

	}
	render(){
		
		return (
			<div>
				<h1>Weather App</h1>
				<DayCollection data={this.state.data}/>		
				<NavButton action="Prev" handleClick={this.handleClick} label="Previous 5 days"/>
				<NavButton action="Next" handleClick={this.handleClick} label="Next 5 days"/>
			</div>
			);
	}
}
export default WeatherApp;