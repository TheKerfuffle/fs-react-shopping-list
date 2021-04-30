import ItemForm from '../ItemForm/ItemForm.jsx';
import React, { useState, useEffect } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx'
import Dashboard from '../Dashboard/Dashboard'

import './App.css';
import getShoppingList from '../ShoppingList/ShoppingList.jsx';



function App() {

    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm />
                <Dashboard />
                <ShoppingList />

                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
