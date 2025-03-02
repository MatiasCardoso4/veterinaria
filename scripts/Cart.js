import { setDisplay } from "../pages/cart-page/CartDisplay.js";
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
export function addToCart(product) {
    const isProductInCart = cart.findIndex((p) => p.name === product.name);
    const { name, image, price, id } = product;
    if (isProductInCart !== -1) {
        cart[isProductInCart].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
        cart.push({ name, image, price, id, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    setDisplay();
}
export function decreaseProduct(product) {
    const isProductInCart = cart.findIndex((p) => p.name === product.name);
    if (product.quantity > 1) {
        cart[isProductInCart].quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    setDisplay();
}
export function deleteProductFromCart(product) {
    cart = cart.filter((p) => p.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setDisplay();
}
export default cart;
