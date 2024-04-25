// Cart functionality
let cartTotal = 0;
const cartTotalElement = document.getElementById('cart-total');
const cartTotalFooterElement = document.getElementById('cart-total-footer');

function updateCartTotal() {
  cartTotalElement.textContent = cartTotal.toFixed(2);
  cartTotalFooterElement.textContent = cartTotal.toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const price = parseFloat(button.previousElementSibling.textContent.replace('$', ''));
    cartTotal += price;
    updateCartTotal();
  });
});

// Search functionality
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const products = document.getElementById('products');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  Array.from(products.getElementsByClassName('product')).forEach(product => {
    const productName = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

// Contact button functionality
const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', () => {
  // Add your contact functionality here
});

// Checkout button functionality
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
  // Add your checkout functionality here
});
