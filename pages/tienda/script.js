const productsContainer = document.querySelector(".products");

async function getProducts() {
  const response = await fetch("../../products-json/products.json");
  const data = await response.json();
  setDisplay(data.productos);
  return data;
}

function createProductCard(product) {
  const card = document.createElement("div");

  const img = document.createElement("img");
  img.src = product.imagen;
  img.alt = product.nombre;

  card.classList.add("card");
  card.innerHTML = `
    <h3>${product.nombre}</h3>
    <p>${product.descripcion}</p>
    <span>$${product.precio.toFixed(2)}</span>
    <button class="add-to-cart">Agregar al carrito</button>
    `;

  card.appendChild(img);
  productsContainer.appendChild(card);
  return card;
}

function setDisplay(data) {
  data.forEach((product) => {
    createProductCard(product);
  });
}

getProducts();
