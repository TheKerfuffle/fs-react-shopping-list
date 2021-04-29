function ItemForm( {name, setName, quantity, setQuantity, unit, setUnit, handleSubmit}) {

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
