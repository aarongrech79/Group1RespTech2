// Cart page specific logic with accessibility enhancements
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
    <div class="cart-item" role="region" aria-label="Cart item: ${item.name}, Price: ${item.price} dollars, Quantity: ${item.quantity}">
      <div class="item-image" role="img" aria-label="${item.image} - ${item.name}">
        ${item.image}
      </div>
      <div class="item-details">
        <h3>${item.name}</h3>
        <p class="item-price">$${item.price.toFixed(2)} each</p>
      </div>
      
      <div class="item-controls">
        <form onsubmit="event.preventDefault(); updateCartQuantity('${item.id}', document.getElementById('qty-${item.id}').value);">
          <label for="qty-${item.id}">Quantity:</label>
          <input 
            type="number" 
            id="qty-${item.id}" 
            class="qty-input" 
            min="1" 
            max="999"
            value="${item.quantity}"
            required
            aria-label="Quantity for ${item.name}"
            aria-required="true"
          >
          <button type="submit" class="btn btn-small" aria-label="Update quantity for ${item.name}">Update</button>
        </form>
      </div>
      
      <div class="item-total" aria-label="Total: ${(item.price * item.quantity).toFixed(2)} dollars">
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
  if (!qty || qty < 1) {
    const item = ShoppingCart.items.find(i => i.id === productId);
    ShoppingCart.showNotification(`Please enter a valid quantity for ${item.name}`);
    document.getElementById(`qty-${productId}`).focus();
    return;
  }
  if (qty > 999) {
    ShoppingCart.showNotification('Maximum quantity is 999 items');
    return;
  }
  ShoppingCart.updateQuantity(productId, qty);
  renderCartItems();
}

function removeFromCartHandler(productId) {
  const item = ShoppingCart.items.find(i => i.id === productId);
  ShoppingCart.removeFromCart(productId);
  renderCartItems();
  ShoppingCart.showNotification(`${item.name} removed from cart`);
}

function updateOrderSummary() {
  const subtotal = ShoppingCart.getTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('subtotal').setAttribute('aria-label', `Subtotal: ${subtotal.toFixed(2)} dollars`);
  
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('tax').setAttribute('aria-label', `Tax at 10 percent: ${tax.toFixed(2)} dollars`);
  
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('total').setAttribute('aria-label', `Total: ${total.toFixed(2)} dollars`);
}

function checkout() {
  if (ShoppingCart.items.length === 0) {
    ShoppingCart.showNotification('Cart is empty. Cannot proceed to checkout.');
    return;
  }

  // Navigate to checkout page
  window.location.href = 'checkout.html';
}

function continueShopping() {
  window.location.href = 'index.html';
}

// Render cart on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
});
