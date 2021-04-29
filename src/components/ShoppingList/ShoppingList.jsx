const getShoppingList = () => {
    axios.get('/list')
    .then((response) => {
        console.log(response.data);
        setShoppingList(response.data);
    })
    .catch(function (error) {
        console.log(error);
        alert('Sorry, could not get shopping list.')
    });
}

axios.post('/list', {name: newNameInput, quantity: newQuantityInput, unit: newUnitInput})
.then( response => {
    console.log('Back successfully');
    getShoppingList();
    // // clear inputs
    //setNameInput('');
    //setQuantityInput('');
    //setUnitInput('');
})
.catch( error => {
    console.log('Error in adding creature', errors);
    alert('Sorry, could not add shopping item.')
})

export default getShoppingList;