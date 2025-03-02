import  {addToCart}  from "./scripts/Cart.js";


const products = document.querySelector(".hero-products-list");

async function getProducts() {
  try {
    const response = await fetch("./data/homeProducts.json");
    const data: string[] = await response.json();
    setDisplay(data);
  } catch (e: any) {
    console.error(e.message);
  }
}

function setDisplay(data: string[]) {
  data.forEach((product: any) => {
    createElements(product);
  });
}

function createElements(product: any) {
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

  button.addEventListener("click", ()=> addToCart(product));

  img.src = product.image;
  title.textContent = product.name;
  price.textContent = product.price;
  brand.textContent = product.brand;
  card.append(img, title, brand, price, buttonContainer);
  products?.append(card);
}

window.addEventListener('DOMContentLoaded', getProducts)