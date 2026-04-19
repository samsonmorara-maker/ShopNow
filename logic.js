// logic.js



// 1. TOGGLE MENU STATE LOGIC

function toggleMenuState(isActive){
  return {
    isActive: !isActive,
    text: !isActive ? "X" : "☰"
  };
}



// 2. FILTER PRODUCTS (SEARCH)

function filterProducts(products, searchText){
  return products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase().trim())
  );
}



// 3. ADD TO CART LOGIC

function addToCartLogic(cart, product){

  const existingItem = cart.find(item => item.id == product.id);

  if (existingItem){
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: parseFloat(product.price),
      image: product.image,
      quantity: 1
    });
  }

  return cart;
}



// 4. CART TOTAL COUNT

function updateCartCountLogic(cart){
  return cart.reduce((total, item) => total + item.quantity, 0);
}


// EXPORT FUNCTIONS
module.exports = {
  toggleMenuState,
  filterProducts,
  addToCartLogic,
  updateCartCountLogic
};