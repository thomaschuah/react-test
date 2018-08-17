import React, { Component } from 'react';

const jsondata = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function InputBox(props){
	return (
		<div>
			<input type="text" placeholder={props.placeholder}/>
		</div>
		);
}

class Searcher extends React.Component {
	constructor(props){
super(props);
	}
	render(){
		return (
			<div>
				<InputBox placeholder="Search..."/>
			</div>
			);
	}

}
export default Searcher;