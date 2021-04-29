import ItemForm from '../ItemForm/ItemForm.jsx';
import React, { useState, useEffect } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx'
import Dashboard from '../Dashboard/Dashboard'

import './App.css';
import getShoppingList from '../ShoppingList/ShoppingList.jsx';



function App() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    useEffect(() => {
        getShoppingList()
    }, [])

    const addItem = () => {

        // wrapping new item into an object
        const itemToAdd = {
            name: name,
            quantity: Number(quantity),
            unit: unit,
        } // end itemToAdd

        // fact checking
        console.log('newItem is:', itemToAdd);

        //post route for adding new item
        axios({
            method: 'POST',
            url: '/list',
            data: itemToAdd
        })
            .then(response => {
                console.log('response from server', response);
            })
            .catch(error => {
                console.log('error sending newItem to server:', error);
            });
    } // end addItem

    // called when submit button pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addItem();
    } // end handleSubmit

    return (
        <div className="App">
            <Header />
            <main>

                <ItemForm
                    name={name}
                    setName={setName}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    unit={unit}
                    setUnit={setUnit}
                    handleSubmit={handleSubmit}
                />
                <Dashboard />
                <ShoppingList />

                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
