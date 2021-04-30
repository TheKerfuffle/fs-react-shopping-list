import axios from 'axios';
import './ShoppingList.css';

function ShoppingList( {shoppingList, getShoppingList} ) {
    
    
    const updatePurchased = (event) => {
        console.log('ID IS:', event.currentTarget.dataset.id); // >> id
        let id = event.currentTarget.dataset.id;
        
        axios ({
            method: 'PUT',
            url: `/list/${id}`,
        })
            .then( response => {
                console.log('response from server:', response);
                getShoppingList();
            })
            .catch( error => {
                console.log('error on put request:', error);
            })
    };
    
    const deleteItem = (event) => {
        let id = event.currentTarget.dataset.id;

        axios ({
            method: 'DELETE',
            url: `/list/${id}`
        })
            .then( response => {
                console.log('response from server:', response);
                getShoppingList();
            })
            .catch( error => {
                console.log('error on delete request:', error);
            })
    }



    
    return (
        <>
                {shoppingList.map(item => (
                    <div className="card" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.quantity} {item.unit}</p>
                        {item.purchased ? (
                            <p>Purchased</p>
                        ) : (
                            <><button data-id={item.id} onClick={updatePurchased}>Buy</button> 
                            <button data-id={item.id} onClick={deleteItem}>Remove</button></>
                        )}
                    </div>
                ))}

        </>
    )
}

export default ShoppingList