import React from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard ( props ) {

    const deleteList = () => {
        axios.delete('/dashboard').then(response => {
            props.getList();
        }).catch( err => {
            console.log('Error DELETING data:', err);
            alert('Could not DELETE list')
        })
    }

    const resetList = () => {
        axios.put('/dashboard').then(response => {
            props.getList();
        }).catch( err => {
            console.log('Error PUT: resetting data:', err);
            alert('Could not RESET list')
        })
    }


    return (
        <>
            <h3>Shopping List</h3>
            <button onClick={resetList}>Reset</button>
            <button onClick={deleteList}>Clear</button>
        </>
    )
}

export default Dashboard;