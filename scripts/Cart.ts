import { setDisplay } from "../pages/cart-page/CartDisplay.js";
import { ProductType } from "../types/ProductType.js";

const savedStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const cart: ProductType[] = savedStorage || [];

export function addToCart(product: ProductType) {
  const isProductInCart = cart.findIndex((p) => p.name === product.name);
  const { name, image, price } = product;
  if (isProductInCart !== -1) {
    cart[isProductInCart].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push({ name, image, price, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  setDisplay();
}

export function decreaseProduct(product:ProductType){

}

export default cart;
