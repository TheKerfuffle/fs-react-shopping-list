import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemForm({getShoppingList}) {
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

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
                getShoppingList();
                setName('');
                setQuantity('');
                setUnit('');
            })
            .catch(error => {
                console.log('error sending newItem to server:', error);
            });
    } // end addItem

    // called when submit button pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addItem();
        getShoppingList();
    } // end handleSubmit

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setName(event.target.value)}
                value={name}
                placeholder="Item Name"
            />
            <input onChange={(event) => setQuantity(event.target.value)}
                value={quantity}
                placeholder="Quantity"
            />
            <input onChange={(event) => setUnit(event.target.value)}
                value={unit}
                placeholder="Unit"
            />
            <input type="submit" value="Save" />
        </form>
    );
}

export default ItemForm;
