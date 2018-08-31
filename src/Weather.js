import React, { Component } from 'react';
import axios from 'axios';

import { pick } from 'lodash/pick';

class Day extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>

				<span>
					{this.props.date}
				</span>

				{this.props.weatherIcon}

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
		return (
			<div>
				{this.props.data.map((day)=>(<Day date={day.day} />))}
			</div>
			);
	}
}

class NavButton extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<button data-action={this.props.action}>
				{this.props.label}
			</button>
			);
	}
}

class WeatherApp extends React.Component {

	// private members
	apiKey = "f21fe054cd52e6c544659c024cd59f0b";
	apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=f21fe054cd52e6c544659c024cd59f0b&units=metric";

	constructor(props){
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount(){
		axios.get(this.apiUrl).then(
			(res) => {
				
				let data = res.data.list;
				debugger;
				data = pick(data, ['main','weather']);
				

				this.setState({data});
			});
	}
	render(){
		return (
			<div>
				<h1>Weather App</h1>
				<DayCollection data={this.props.data}/>
				<NavButton action="<< Prev" label="Previous 5 days"/>
				<NavButton action="<< Next"	 label="Next 5 days"/>
			</div>
			);
	}
}
export default WeatherApp;