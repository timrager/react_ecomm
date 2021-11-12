import React, { Component } from 'react';

class Product extends Component {

    state = {
        product: this.props.product
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.state.product.id}
                            <span className="float-end hand-icon"
                                onClick={() => { this.props.onDelete(this.state.product) }}>
                                <i className="fa fa-times" />
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
                        <div>${this.state.product.price}</div>
                    </div>
                    <div className="card-footer text-end">
                        <div className="float-start">
                            <span className="badge bg-secondary">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => { this.props.onIncrement(this.state.product) }}>+
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => { this.props.onDecrement(this.state.product) }}>-
                                </button>
                            </div>
                        </div>
                        <div className="float-end">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;