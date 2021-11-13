import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Dashboard from './Dashboard';
import CustomersList from './CustomersList';


class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/customers" element={<CustomersList />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </>
        )
    }
}

export default App;