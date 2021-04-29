import React, {useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx';
import './App.css';


function App() {
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
            </main>
        </div>
    );
}

export default App;
