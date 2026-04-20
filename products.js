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



function displayProducts(products){

  const collection = document.getElementById("new-arrivals");
  collection.innerHTML = "";
   products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card")
    card.innerHTML = `
                    <img src="${product.image}" alt ="${product.title}">
                     <h5>${product.title}</h5>
                      <p>$${product.price}</p>
                      <button class="cart-btn"
                       data-id="${product.id}"
                       data-title="${product.title}"
                       data-price="${product.price}"
                        data-image="${product.image}">Add to cart</button>
                        `
  collection.appendChild(card); });

  //adding event listeners after rendering products
  const cartbuttons = document.querySelectorAll(".cart-btn");
  cartbuttons.forEach(button=>{
    button.addEventListener("click", addToCart);
  });

   
  }   

//fetching data from the fake store api
let products = [];
async function fetchproducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();

   products = data.slice(4,20);

  displayProducts(products);
  
}
  

fetchproducts();



//function to add to cart logic 
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(e){
  const button = e.target;
  const product ={
    id: button.dataset.id,
    title: button.dataset.title,
    price: parseFloat(button.dataset.price),
    image:button.dataset.image,
    quantity:1
  };
  const existingItem = cart.find(item =>item.id == product.id);
  if (existingItem){
    existingItem.quantity++
  } 
  else{
    cart.push(product);

  }
  localStorage.setItem("cart", JSON.stringify(cart));
  //saveCart();
  updateCartCount();
  //renderingcart();
}
// a function to add cart count
function updateCartCount(){
  let totalItems = 0
  cart.forEach(item => {
    totalItems += item.quantity;
  });
  document.getElementById("cartcount").textContent=totalItems;
}

function searchProducts(){
    const searchText = document.getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText)
      );
      displayProducts(filteredProducts);
}
document.getElementById("search")
.addEventListener("click", searchProducts);
updateCartCount();

