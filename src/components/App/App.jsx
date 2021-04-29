
import React from 'react';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx'
import Dashboard from '../Dashboard/Dashboard'

import './App.css';
import getShoppingList from '../ShoppingList/ShoppingList.jsx';

useEffect(() => {
    getShoppingList()
}, [])

function App() {
    return (
        <div className="App">
            <Header />
            <main>

                <Dashboard />
                <ShoppingList />

                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
