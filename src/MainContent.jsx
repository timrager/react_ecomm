import React, { Component } from 'react';

class MainContent extends Component {

    state = {
        pageTitle: "Customers",
        customerCount: 5,
        customers: [
            { id: 1, name: "Scott", phone: "123-2345", address: {city: "Seattle", state: "WA"}, photo: "https://picsum.photos/id/1010/60" },
            { id: 2, name: "Brad", phone: "123-3456", address: {city: "Tacoma", state: "WA"}, photo: "https://picsum.photos/id/1020/60" },
            { id: 3, name: "Jake", phone: null, address: {city: "Bellingham", state: "WA"}, photo: "https://picsum.photos/id/1060/60" },
            { id: 4, name: "Todd", phone: "123-5678", address: {city: "Pasco", state: "WA"}, photo: "https://picsum.photos/id/1040/60" },
            { id: 5, name: "Albert", phone: null, address: {city: "Tri-Cities", state: "WA"}, photo: "https://picsum.photos/id/1050/60" },
        ]
    };

    onRefreshClick = () => {
        console.log("Button Click")
        this.setState({ customerCount: 7 })
    };
    
    getPhoneNumber = (customer) => {
        return customer.phone ? customer.phone : <div className="bg-warning p-2 text-center">N/A</div>
    }

    displayCustomers = () => {
        return this.state.customers.map( (customer) => {
            return (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td><img src={customer.photo} alt="Customer"/></td>
                    <td>{customer.name}</td>
                    <td>{customer.address.city}</td>
                    <td>{this.getPhoneNumber(customer)}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">
                        {this.state.customerCount}
                    </span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>City</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>{this.displayCustomers()}</tbody>
                </table>
            </div>
        )
    };
}

export default MainContent;