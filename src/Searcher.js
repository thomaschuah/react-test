import React, { Component } from 'react';



class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}


class ProductTable extends React.Component {
	render() {
	    const filterText = this.props.filterText;
	    const inStockOnly = this.props.inStockOnly;

	    const rows = [];
	    let lastCategory = null;

	    let products = this.props.products;

	    products.filter((product) => (product.name.includes(filterText) && (product.stocked==(inStockOnly ? true : product.stocked)))).forEach((product) => {
	    	if (product.category !== lastCategory) {
		        rows.push(
		          <ProductCategoryRow
		            category={product.category}
		            key={product.category} />
		        );
		      }
		      rows.push(
		        <ProductRow
		          product={product}
		          key={product.name}
		        />
		      );
		      lastCategory = product.category;
	    });

	    // products.forEach((product) => {
	    //   if (product.name.indexOf(filterText) === -1) {
	    //     return;
	    //   }
	    //   if (inStockOnly && !product.stocked) {
	    //     return;
	    //   }
	    //   if (product.category !== lastCategory) {
	    //     rows.push(
	    //       <ProductCategoryRow
	    //         category={product.category}
	    //         key={product.category} />
	    //     );
	    //   }
	    //   rows.push(
	    //     <ProductRow
	    //       product={product}
	    //       key={product.name}
	    //     />
	    //   );
	    //   lastCategory = product.category;
	    // });

	    return (
	    	<div>
	      <div><span>Name</span>
	            <span>Price</span>
	          </div>
	        <div>{rows}</div>
	      </div>
	    );
	}
}

class SearchBar extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const checked = this.props.inStockOnly;
		const filterText = this.props.filterText;
		return (
			<div>
				<input type="text" onChange={this.props.handleFilterTextChange} value={filterText}/>
				<div>
					<input type="checkbox" onChange={this.props.handleInStockChange} checked={checked}/>
					Only show products in stock
				</div>
			</div>
			);
	}
}


class FilterableProductTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
	    };
	    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	    this.handleInStockChange = this.handleInStockChange.bind(this);
	}
	handleFilterTextChange(event){
		//event.preventDefault();
		this.setState({
			filterText: event.target.value
		});
	}
	handleInStockChange(event){
		
		this.setState({
			inStockOnly: event.target.checked
		});
	}
	render(){
		return (
			<div>
				<SearchBar filterText={this.state.filterText} handleInStockChange={this.handleInStockChange} handleFilterTextChange={this.handleFilterTextChange} inStockOnly={this.state.inStockOnly} />
				<ProductTable filterText={this.state.filterText}  inStockOnly={this.state.inStockOnly} products={this.props.products} />
			</div>
			);
	}
}


export default FilterableProductTable;