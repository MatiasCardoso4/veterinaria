import { setDisplay } from "../pages/cart-page/CartDisplay.js";
const savedStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const cart = savedStorage || [];
export function addToCart(product) {
    const isProductInCart = cart.findIndex((p) => p.name === product.name);
    const { name, image, price } = product;
    if (isProductInCart !== -1) {
        cart[isProductInCart].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
        cart.push({ name, image, price, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    setDisplay();
}
export function decreaseProduct(product) {
}
export default cart;
