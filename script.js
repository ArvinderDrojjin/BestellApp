function render(myDishes) {
    let basketHTML = document.getElementById('content_restaurant_pizza');
    basketHTML.innerHTML = "";
    for (let index = 0; index < myDishes.length; index++) {
        basketHTML.innerHTML += getNoteTemplate(index, myDishes); 
    }
}

function renderExtras(myExtras) {
    let extrasHTML = document.getElementById('extras');
    extrasHTML.innerHTML = "";
    for (let index = 0; index < myExtras.length; index++) {
        extrasHTML.innerHTML += getExtrasTemplate(index, myExtras); 
    }
}


let basketItems = [];


function addToBasket(index, type) {
    let selectedItem;
    if (type === 'dish') {
        selectedItem = myDishes[index];
    } else if (type === 'extra') {
        selectedItem = myExtras[index];
    }

    let existingItem = basketItems.find(item => item.name === selectedItem.name && item.type === type);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        basketItems.push({ ...selectedItem, quantity: 1, type: type });
    }

    updateBasket();
}



function updateBasket() {
    let basketHTML = document.getElementById('basket');
    basketHTML.innerHTML = "<h3>Warenkorb</h3>";

    if (basketItems.length === 0) {
        basketHTML.innerHTML += "<p>Warenkorb ist leer</p>";
    } else {
        let total = 0;
        basketItems.forEach((dish, i) => {
            total += dish.price * dish.quantity;
            basketHTML.innerHTML += getBasketItemTemplate(dish, i);
        });
        basketHTML.innerHTML += getBasketTotalTemplate(total);
    }
}


function renderOverlayBasket() {
    let overlayContent = document.getElementById('basketOverlayContent');
    overlayContent.innerHTML = "<h3>Warenkorb</h3>";

    if (basketItems.length === 0) {
        overlayContent.innerHTML += "<p>Warenkorb ist leer</p>";
        return;
    }

    let total = 0;

    basketItems.forEach((dish, i) => {
        total += dish.price * dish.quantity;
        overlayContent.innerHTML += getBasketItemTemplate(dish, i);
    });

    overlayContent.innerHTML += getBasketTotalTemplate(total);
}


function toggleBasketOverlay() {
    let overlay = document.getElementById('basketOverlay');
    let isOpen = overlay.style.display === 'flex';

    if (isOpen) {
        overlay.style.display = 'none';
    } else {
        renderOverlayBasket();
        overlay.style.display = 'flex';
    }
}


function changeQuantity(index, change) {
    basketItems[index].quantity += change;

    if (basketItems[index].quantity <= 0) {
        basketItems.splice(index, 1); 
    }
    updateBasket();
    renderOverlayBasket();
}


function removeFromBasket(index) {
    basketItems.splice(index, 1);

    updateBasket();
    renderOverlayBasket();
}

function init() {
    render(myDishes);
    renderExtras(myExtras);
}

init();