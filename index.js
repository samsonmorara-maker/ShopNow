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


// fectching products from fake store api and making it appear on my webpage
async function fetchproducts() {
  const response = await 
  fetch('https://fakestoreapi.com/products')
  const data = await response.json();

  const products = data.slice(0,4);
  
  displayProducts(products);
  
}
fetchproducts();



