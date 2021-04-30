import ItemForm from '../ItemForm/ItemForm.jsx';
import React, { useState, useEffect } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
import './App.css';




function App() {
    // Create storage
    let [shoppingList, setShoppingList] = useState([]);

    // On page load, get shopping list
    useEffect(() => {
        getShoppingList();
    }, [])

    const getShoppingList = () => {
        axios.get('/list')
            .then((response) => {
                console.log(response.data);
                setShoppingList(response.data);
            })
            .catch(function (error) {
                console.log(error);
                // alert('Sorry, could not get shopping list.')
            });
    }



    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm getShoppingList={getShoppingList}/>
                <Dashboard />
                <ShoppingList shoppingList={shoppingList} />
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
