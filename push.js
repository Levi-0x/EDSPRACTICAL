document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");
    const itemInput = document.getElementById("item-input");
    const addItemButton = document.getElementById("add-item");
    const removeItemButton = document.getElementById("remove-item");

    const cart = [];

    const renderCart = () => {
        cartList.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartList.appendChild(li);
        });
    };

    addItemButton.addEventListener("click", () => {
        const newItem = itemInput.value.trim();
        if (newItem) {
            cart.push(newItem);
            itemInput.value = "";
            renderCart();
        }
    });

    removeItemButton.addEventListener("click", () => {
        if (cart.length > 0) {
            cart.pop();
            renderCart();
        }
    });
});