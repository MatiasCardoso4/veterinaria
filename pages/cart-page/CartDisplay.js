import { addToCart, decreaseProduct, deleteProductFromCart, } from "../../scripts/Cart.js";
const cartDisplay = document.querySelector(".list-cart-products");
const totalProduts = document.querySelector(".total--products");
const totalPriceTag = document.querySelector(".total--products--price");
function createDisplayElements(p) {
    /*Card of the product*/
    const card = document.createElement("li");
    card.classList.add("product-card");
    const nameTag = document.createElement("h3");
    nameTag.classList.add("product-name");
    const priceTag = document.createElement("span");
    priceTag.classList.add("product-price");
    const image = document.createElement("img");
    image.classList.add("product-image");
    const increaseBtn = document.createElement("button");
    increaseBtn.classList.add("increase");
    increaseBtn.textContent = "+";
    const decreaseBtn = document.createElement("button");
    decreaseBtn.classList.add("decrease");
    decreaseBtn.textContent = "-";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = `<img src="../../assets/trash-can.png">`;
    const manageQuantity = document.createElement("div");
    manageQuantity.classList.add("product-card-btn-container");
    const quantityTag = document.createElement("span");
    quantityTag.classList.add("product-quantity");
    increaseBtn.addEventListener("click", () => addToCart(p));
    decreaseBtn.addEventListener("click", () => decreaseProduct(p));
    deleteBtn.addEventListener("click", () => deleteProductFromCart(p));
    quantityTag.textContent = `${p.quantity}`;
    manageQuantity.append(decreaseBtn, quantityTag, increaseBtn, deleteBtn);
    nameTag.textContent = p.name;
    priceTag.textContent = `$${p.price}`;
    image.src = p.image;
    image.alt = p.name;
    card.append(nameTag, image, priceTag, manageQuantity);
    cartDisplay === null || cartDisplay === void 0 ? void 0 : cartDisplay.appendChild(card);
}
export function setDisplay() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cartDisplay) {
        cartDisplay.textContent = "";
    }
    if (totalProduts) {
        const totalQuantity = cart.reduce((previousValue, currentValue) => {
            return previousValue + Number(currentValue.quantity);
        }, 0);
        totalProduts.textContent = `${totalQuantity}`;
    }
    if (totalPriceTag) {
        const totalPrice = cart.reduce((previousValue, p) => {
            return (previousValue += Number(p.price) * Number(p.quantity));
        }, 0);
        totalPriceTag.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
    cart.forEach((p) => {
        createDisplayElements(p);
    });
}
window.addEventListener("DOMContentLoaded", setDisplay);
