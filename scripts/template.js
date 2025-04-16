function getNoteTemplate(index, myDishes) {
    return `
            <div class="pizza_item">
                <div class="cart-icon-container">
                    <button class="add_to_cart_btn" onclick="addToBasket(${index}, 'dish')">&#128722</button>
                </div>
                <p><strong>${myDishes[index].name}</strong></p>
                <p>${myDishes[index].price} €</p>
                <p>${myDishes[index].description}</p>
            </div>

    `;
}

function getExtrasTemplate(index, myExtras) {
    return `
            <div class="extras_item">
                <div class="cart-icon-container">
                    <button class="add_to_cart_btn" onclick="addToBasket(${index}, 'extra')">&#128722</button>
                </div>
                <p><strong>${myExtras[index].name}</strong></p>
                <p>${myExtras[index].price} €</p>
            </div>

    `;
}


function getBasketItemTemplate(dish, i) {
    return `
        <div class="basket_item">
            <p><strong>${dish.name}</strong></p>
            <p>${dish.price} €</p>
            <p>Menge: 
                <button onclick="changeQuantity(${i}, -1)">&#8722</button> 
                ${dish.quantity} 
                <button onclick="changeQuantity(${i}, 1)">&#43</button>
                <button class="remove_btn" onclick="removeFromBasket(${i})">&#128465</button>
            </p>
        </div>
    `;
}


function getBasketTotalTemplate(total) {
    return `
        <div class="basket_total">
            <hr>
            <p><strong>Gesamtsumme: ${total.toFixed(2)} €</strong></p>
            <a href="payment.html" target="_blank">
                <button class="orderButton" onclick="placeOrder()">Bestellen</button>
            </a>
        </div>
    `;
}