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


export default getShoppingList;