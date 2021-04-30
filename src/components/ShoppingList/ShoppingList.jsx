import './ShoppingList.css';

function ShoppingList({shoppingList}) {
    return (
        <>

                {shoppingList.map(item => (
                    <div class="card">
                    <p key={item.id}>{item.name}</p>
                    <p>{item.quantity} {item.unit}</p>
                    <button>Buy</button> <button>Remove</button>
                    </div>
                ))}

        </>
    )
}

export default ShoppingList