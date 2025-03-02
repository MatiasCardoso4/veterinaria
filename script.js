var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addToCart } from "./scripts/Cart.js";
const products = document.querySelector(".hero-products-list");
function getProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./data/homeProducts.json");
            const data = yield response.json();
            setDisplay(data);
        }
        catch (e) {
            console.error(e.message);
        }
    });
}
function setDisplay(data) {
    data.forEach((product) => {
        createElements(product);
    });
}
function createElements(product) {
    const card = document.createElement("div");
    card.classList.add("hero-products-card");
    const img = document.createElement("img");
    img.classList.add("hero-products-card-img");
    const title = document.createElement("h3");
    title.classList.add("hero-products-card-title");
    const price = document.createElement("p");
    price.classList.add("hero-products-card-price");
    const brand = document.createElement("p");
    brand.classList.add("hero-products-card-brand");
    const button = document.createElement("button");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("hero-products-card-button-container");
    buttonContainer.append(button);
    button.textContent = "Agregar al carrito";
    button.classList.add("hero-products-card-button");
    button.addEventListener("click", () => addToCart(product));
    img.src = product.image;
    title.textContent = product.name;
    price.textContent = `$${product.price}`;
    brand.textContent = product.brand;
    card.append(img, title, brand, price, buttonContainer);
    products === null || products === void 0 ? void 0 : products.append(card);
}
window.addEventListener('DOMContentLoaded', getProducts);
