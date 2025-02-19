const productsContainer = document.querySelector(".products");

async function getProducts() {
  try {
    const response = await fetch("./products-json/products.json");
    if (!response) {
      throw new Error("Error al obtener los productos");
    }
    const data = await response.json();
    setDisplay(data.productos);
    return data;
  } catch (e) {
    console.error(e.message);
  }
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

window.addEventListener('DOMContentLoaded',getProducts)
