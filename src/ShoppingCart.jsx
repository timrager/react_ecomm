
import React, { Component } from 'react';
import Product from "./Product";

class ShoppingCart extends Component {


    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    productName: "iPhone",
                    price: 999,
                    quantity: 0
                },
                {
                    id: 2,
                    productName: "iPad Pro",
                    price: 1499,
                    quantity: 0
                },
                {
                    id: 3,
                    productName: "MacBook Air",
                    price: 1099,
                    quantity: 0
                },
                {
                    id: 4,
                    productName: "MacBook Pro",
                    price: 2999,
                    quantity: 0
                },
                {
                    id: 5,
                    productName: "LG 4K 28-inch Monitor",
                    price: 799,
                    quantity: 0
                },
                {
                    id: 6,
                    productName: "AirPods Pro",
                    price: 299,
                    quantity: 0
                }
            ]
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

    componentDidMount() {
        console.log("ShoppingCart mounted")
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