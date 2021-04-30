import './ShoppingList.css';

function ShoppingList({shoppingList}) {
    return (
        <>
                {shoppingList.map(item => (
                    <div className="card" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.quantity} {item.unit}</p>
                        {item.purchased ? (
                            <p>Purchased</p>
                        ) : (
                            <><button>Buy</button> <button>Remove</button></>
                        )}
                    </div>
                ))}

        </>
    )
}

export default ShoppingList