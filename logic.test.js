const {
  toggleMenuState,
  filterProducts,
  addToCartLogic,
  updateCartCountLogic
} = require('./logic');



// TEST 1: MENU TOGGLE

test('toggles menu from closed to open', () => {
  const result = toggleMenuState(false);

  expect(result.isActive).toBe(true);
  expect(result.text).toBe("X");
});

test('toggles menu from open to closed', () => {
  const result = toggleMenuState(true);

  expect(result.isActive).toBe(false);
  expect(result.text).toBe("☰");
});



// TEST 2: FILTER PRODUCTS

test('filters products using search text', () => {
  const products = [
    { title: "iPhone" },
    { title: "Laptop" },
    { title: "Headphones" }
  ];

  const result = filterProducts(products, "phone");

  expect(result.length).toBe(1);
  expect(result[0].title).toBe("iPhone");
});

test('returns empty array if no match', () => {
  const products = [
    { title: "Laptop" },
    { title: "Tablet" }
  ];

  const result = filterProducts(products, "phone");

  expect(result.length).toBe(0);
});



// TEST 3: ADD TO CART
test('adds new product to cart', () => {
  let cart = [];

  const product = {
    id: 1,
    title: "Phone",
    price: 100,
    image: "img.jpg"
  };

  cart = addToCartLogic(cart, product);

  expect(cart.length).toBe(1);
  expect(cart[0].quantity).toBe(1);
});

test('increases quantity if product exists', () => {
  let cart = [
    { id: 1, title: "Phone", price: 100, quantity: 1 }
  ];

  const product = {
    id: 1,
    title: "Phone",
    price: 100,
    image: "img.jpg"
  };

  cart = addToCartLogic(cart, product);

  expect(cart.length).toBe(1);
  expect(cart[0].quantity).toBe(2);
});



// TEST 4: CART COUNT

test('calculates total cart quantity correctly', () => {
  const cart = [
    { quantity: 2 },
    { quantity: 3 },
    { quantity: 1 }
  ];

  const result = updateCartCountLogic(cart);

  expect(result).toBe(6);
});

test('returns 0 for empty cart', () => {
  const result = updateCartCountLogic([]);

  expect(result).toBe(0);
});