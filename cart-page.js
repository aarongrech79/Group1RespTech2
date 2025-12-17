// Cart page specific logic
function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const emptyDiv = document.getElementById('cart-empty');
  const contentDiv = document.getElementById('cart-content');

  if (ShoppingCart.items.length === 0) {
    contentDiv.style.display = 'none';
    emptyDiv.style.display = 'block';
    container.innerHTML = '';
    return;
  }

  contentDiv.style.display = 'block';
  emptyDiv.style.display = 'none';

  container.innerHTML = ShoppingCart.items.map(item => `
    <div class="cart-item" role="region" aria-label="Item: ${item.name}">
      <div class="item-image">${item.image}</div>
      <div class="item-details">
        <h4>${item.name}</h4>
        <p class="item-price">$${item.price.toFixed(2)} each</p>
      </div>
      
      <div class="item-controls">
        <label for="qty-${item.id}">Qty:</label>
        <input 
          type="number" 
          id="qty-${item.id}" 
          class="qty-input" 
          min="1" 
          value="${item.quantity}"
          onchange="updateCartQuantity('${item.id}', this.value)"
          aria-label="Quantity for ${item.name}"
        >
      </div>
      
      <div class="item-total">
        $${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        class="btn btn-danger" 
        onclick="removeFromCartHandler('${item.id}')"
        aria-label="Remove ${item.name} from cart"
      >
        Remove
      </button>
    </div>
  `).join('');

  updateOrderSummary();
}

function updateCartQuantity(productId, quantity) {
  const qty = parseInt(quantity);
  if (qty > 0) {
    ShoppingCart.updateQuantity(productId, qty);
    renderCartItems();
  }
}

function removeFromCartHandler(productId) {
  ShoppingCart.removeFromCart(productId);
  renderCartItems();
  ShoppingCart.showNotification('Item removed from cart');
}

function updateOrderSummary() {
  const subtotal = ShoppingCart.getTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  if (ShoppingCart.items.length === 0) {
    alert('Cart is empty');
    return;
  }

  const total = ShoppingCart.getTotal() * 1.1;
  alert(`Order placed successfully!\n\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
  ShoppingCart.clear();
  renderCartItems();
  window.location.href = 'index.html';
}

function continueShopping() {
  window.location.href = 'index.html';
}

// Render cart on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
});
