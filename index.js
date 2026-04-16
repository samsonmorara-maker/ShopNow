//making the navbar responsive creating a menu button
const menu =document.getElementById('menuBtn');
const nav =document.getElementById("nav");

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    if
  (nav.classList.contains("active"))
  menu.textContent = "X" 

  else
  menu.textContent =  "☰"
});

 //a function to display the fetched data

function displayProducts(products){

  const collection = document.getElementById("new-arrival");
   products.forEach(product => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="card"><img src="${product.image}" alt = alt ="${product.title}">
                     <h6>${product.title}<h6>
                      <p>$${product.price}</p></div>`
  collection.appendChild(card)
   });
  }

//fetching data from the fake store api

async function fetchproducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();

  const products = data.slice(0,4);

  displayProducts(products);
  
}
  

fetchproducts();




