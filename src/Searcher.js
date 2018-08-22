import React, { Component } from 'react';

const jsondata = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ProductRow extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var style;
		if (this.props.stocked){
			style = {
				color:'black'
			};

		} else {
			style = {
				color:'red'
			};
		}

		return (
			<div>
				<span style={style}>{this.props.label}</span>
				<span>${this.props.price}</span>
			</div>
			);
	}
}

class ProductCategoryRow extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<span>{this.props.label}</span>
			</div>
			);
	}
}

class ProductTable extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const rows = [];
		let lastCategory = "";
		this.props.products.forEach((product) => {
			if (product.category != lastCategory){
				rows.push(<ProductCategoryRow key={product.category} label={product.category} />);
			}
			rows.push(<ProductRow key={product.name} stocked={product.stocked} label={product.name} price={product.price} />);
		});
		return (
			
			<div>
				<div>
					<span>Name</span>
					<span>Price</span>
				</div>
				<div>
					{rows}
				</div>
			</div>
			);
	}
}

class SearchBar extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<input type="text" placeholder={this.props.value}/>
				<div>
					<input type="checkbox"/>
					Only show products in stock
				</div>
			</div>
			);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<SearchBar value="Search..."/>
				<ProductTable products={jsondata} />
			</div>
			);
	}
}



// function InputBox(props){
// 	return (
// 		<div>
// 			<div><input type="text" placeholder={props.placeholder}/></div>
// 			<input type="checkbox"/> Only show products in stock
// 		</div>
// 		);
// }


 

// class Searcher extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			data: jsondata
// 		};
// 	}
// 	render(){

// 		let items = this.state.data;
// 		items = items.map((item) => (
// 			<li>{item.name} $ {item.price}</li>
// 			)
// 		);

// 		return (
// 			<div>
// 				<InputBox placeholder="Search..."/>
// 				<ul>
// 					{items}
// 				</ul>
// 			</div>
// 			);
// 	}

// }
export default FilterableProductTable;