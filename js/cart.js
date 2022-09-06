const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity)
    // display product on UI
    addProductToDisplay(product, quantity)
    // set to local storage
    // simple way

    // localStorage.setItem(product, quantity)
    saveItemLocalStorage(product, quantity)
}

const getShoppingCartLocalStorage = () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart)
    }
    return cart;
}

const saveItemLocalStorage = (product, quantity) => {
    const cart = getShoppingCartLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartSringified = JSON.stringify(cart);

    // save to local storage
    localStorage.setItem('cart', cartSringified);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)
}

const displayStoredProduct = () => {
    const cart = getShoppingCartLocalStorage();
    for (const product in cart) {
        const quantity = cart[product]
        console.log(product, quantity)
        addProductToDisplay(product, quantity)
    }
}
displayStoredProduct()