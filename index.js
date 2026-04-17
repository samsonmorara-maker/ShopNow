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
let count = 0
function displayProducts(products){

  const collection = document.getElementById("new-arrival");
   products.forEach(product => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="card"><img src="${product.image}" alt = alt ="${product.title}">
                     <h5>${product.title}<h5>
                      <p>$${product.price}</p>
                      <button class="cart-btn" id="cartbtn">Add to cart</button></div>`
                  
  collection.appendChild(card); });
  const button =document.getElementById("cart-btn")
  button.addEventListener("click",
function AddToCart(){
  count++;
  document.getElementById("cartcount").textContent = count;
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

button.addEventListener("click",
function AddToCart(){
  count++;
  document.getElementById("cartcount").textContent = count;
});





