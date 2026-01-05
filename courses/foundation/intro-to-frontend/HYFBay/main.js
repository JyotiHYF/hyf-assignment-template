console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${product.name}</strong><br>
      Price: ${product.price}<br>
      Rating: ${product.rating}
    `;

    ul.appendChild(li);
  });
}
renderProducts(products);
