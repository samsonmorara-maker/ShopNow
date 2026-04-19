// logic.js

function updateCartCount(cart){
  let totalItems = 0;
  cart.forEach(item => {
    totalItems += item.quantity;
  });
  return totalItems;
}

function filterProducts(products, searchText){
  return products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
}

function addToCartLogic(cart, product){
  const existingItem = cart.find(item => item.id == product.id);

  if (existingItem){
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return cart;
}

module.exports = {
  updateCartCount,
  filterProducts,
  addToCartLogic
};