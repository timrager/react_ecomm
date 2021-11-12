import React, { Component } from 'react';

class Product extends Component {

    render() {
        return (
            <div className="col-md-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.props.product.id}</div>
                        <h5 className="pt-2 border-top">{this.props.product.productName}</h5>
                        <div>${this.props.product.price}</div>
                    </div>
                    <div className="card-footer text-end">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;