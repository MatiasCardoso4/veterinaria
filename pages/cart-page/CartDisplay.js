import cart, { addToCart } from "../../scripts/Cart.js";
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
    const manageQuantity = document.createElement("div");
    manageQuantity.classList.add("product-card-btn-container");
    const quantityTag = document.createElement("span");
    quantityTag.classList.add("product-quantity");
    increaseBtn.addEventListener("click", () => addToCart(p));
    decreaseBtn.addEventListener("click", () => addToCart(p));
    quantityTag.textContent = `${p.quantity}`;
    manageQuantity.append(decreaseBtn, quantityTag, increaseBtn);
    nameTag.textContent = p.name;
    priceTag.textContent = p.price.toString();
    image.src = p.image;
    image.alt = p.name;
    if (totalProduts) {
        const totalQuantity = cart.reduce((previousValue, currentValue) => {
            return previousValue + Number(currentValue.quantity);
        }, 0);
        totalProduts.textContent = `${totalQuantity}`;
    }
    card.append(nameTag, image, priceTag, manageQuantity);
    cartDisplay === null || cartDisplay === void 0 ? void 0 : cartDisplay.appendChild(card);
}
export function setDisplay() {
    if (cartDisplay) {
        cartDisplay.textContent = "";
    }
    if (totalPriceTag) {
        const totalPrice = cart.reduce((acc, p) => {
            acc += p.price;
            return acc;
        }, 0);
        totalPriceTag.textContent = `$${totalPrice}`;
    }
    cart.forEach((p) => {
        createDisplayElements(p);
    });
}
window.addEventListener("DOMContentLoaded", setDisplay);
