
import React, { Component } from 'react';
import Product from "./Product";

class ShoppingCart extends Component {

    state = {
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

    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map( (product) => {
                        return (
                            <Product key={product.id} product={product}>
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default ShoppingCart;