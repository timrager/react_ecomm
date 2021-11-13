
import React, { Component } from 'react';
import Product from "./Product";

class ShoppingCart extends Component {


    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map( (product) => {
                        return (
                            <Product key={product.id} product={product} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>
                        )
                    })}
                </div>
            </div>
        )
    }

    componentDidMount = async () => {

        let response = await fetch("http://localhost:3000/products", {method:"GET"})
        
        let allProducts = await response.json()

        this.setState({ products: allProducts })

        // fetch("http://localhost:3000/products")
        //     .then((response) => {
        //         response.json()
        //             .then(allProds => {
        //                 this.setState({ products: allProds })
        //         })
        //     }) 
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Did Update")
    }

    handleIncrement = (product) => {

        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        allProducts[index].quantity < 10 ? allProducts[index].quantity++ : allProducts[index].quantity = 10;

        this.setState({products: allProducts})
    }

    handleDecrement = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        allProducts[index].quantity > 0 ? allProducts[index].quantity-- : allProducts[index].quantity = 0;

        this.setState({products: allProducts})
    }

    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (window.confirm("Are you sure?")) {

            allProducts.splice(index, 1);

            this.setState({ products: allProducts });
            
        }
    }

}

export default ShoppingCart;