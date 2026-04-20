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

// items to be add to the cart page function and dom
     // variables used
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const ChosenItems = document.getElementById("chosen-items");
const Totalprice = document.getElementById("total");
  //function for displaying products
  function displayCart(){
    ChosenItems.innerHTML = ""; // to clear existing products
    let total = 0 ;
    cart.forEach((item, index) => {
        // to calculate total price
        total += Number(item.price) * Number(item.quantity) ;
        ChosenItems.innerHTML += `
        <div class="cart-item">
        <img src ="${item.image}">
        <h5>${item.title}</h5>
        <p>$${item.price}</p>
        <p>quantity:${item.quantity}</p>
         <button class=remove-btn onclick="removeItem(${index})">remove</button>
         </div>`;
        
    });
    Totalprice.textContent = total.toFixed(2)
  }
  
   // a fuction for removing items from the cart
   function removeItem(index){
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
   }
   // call the display function to enable products to display
   displayCart()