// Checkout page functionality

// Toggle shipping address fields
function toggleShippingAddress(sameAsBilling) {
  const shippingFields = document.getElementById('shipping-fields');
  const shippingInputs = shippingFields.querySelectorAll('input, select');
  
  if (sameAsBilling) {
    shippingFields.style.display = 'none';
    shippingInputs.forEach(input => {
      input.removeAttribute('required');
      input.removeAttribute('aria-required');
    });
  } else {
    shippingFields.style.display = 'block';
    shippingInputs.forEach(input => {
      input.setAttribute('required', '');
      input.setAttribute('aria-required', 'true');
    });
  }
}

// Render order summary
function renderCheckoutSummary() {
  const cart = ShoppingCart.getItems();
  const summaryContainer = document.getElementById('checkout-summary-items');
  
  if (!summaryContainer) return;
  
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }
  
  let html = '<div class="summary-items">';
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) {
      html += `
        <div class="summary-item">
          <span class="summary-item-name">${product.name} × ${item.quantity}</span>
          <span class="summary-item-price">$${(product.price * item.quantity).toFixed(2)}</span>
        </div>
      `;
    }
  });
  html += '</div>';
  
  summaryContainer.innerHTML = html;
  
  // Calculate totals
  const subtotal = ShoppingCart.getTotal();
  const tax = subtotal * 0.10;
  const shipping = 5.00;
  const total = subtotal + tax + shipping;
  
  document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('checkout-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('checkout-shipping').textContent = `$${shipping.toFixed(2)}`;
  document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
}

// Handle form submission
function handleCheckoutSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  
  // Validate form
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  // Collect billing information
  const billingInfo = {
    name: document.getElementById('billing-name').value,
    email: document.getElementById('billing-email').value,
    phone: document.getElementById('billing-phone').value,
    address: document.getElementById('billing-address').value,
    city: document.getElementById('billing-city').value,
    state: document.getElementById('billing-state').value,
    zip: document.getElementById('billing-zip').value,
    country: document.getElementById('billing-country').value
  };
  
  // Collect shipping information
  const sameAsBilling = document.getElementById('same-as-billing').checked;
  let shippingInfo;
  
  if (sameAsBilling) {
    shippingInfo = { ...billingInfo };
  } else {
    shippingInfo = {
      name: document.getElementById('shipping-name').value,
      address: document.getElementById('shipping-address').value,
      city: document.getElementById('shipping-city').value,
      state: document.getElementById('shipping-state').value,
      zip: document.getElementById('shipping-zip').value,
      country: document.getElementById('shipping-country').value
    };
  }
  
  // Save to localStorage
  localStorage.setItem('checkoutBilling', JSON.stringify(billingInfo));
  localStorage.setItem('checkoutShipping', JSON.stringify(shippingInfo));
  
  // Redirect to payment page
  window.location.href = 'payment.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  ShoppingCart.init();
  renderCheckoutSummary();
  
  // Load saved billing info if available
  const savedBilling = localStorage.getItem('checkoutBilling');
  if (savedBilling) {
    const billing = JSON.parse(savedBilling);
    document.getElementById('billing-name').value = billing.name || '';
    document.getElementById('billing-email').value = billing.email || '';
    document.getElementById('billing-phone').value = billing.phone || '';
    document.getElementById('billing-address').value = billing.address || '';
    document.getElementById('billing-city').value = billing.city || '';
    document.getElementById('billing-state').value = billing.state || '';
    document.getElementById('billing-zip').value = billing.zip || '';
    document.getElementById('billing-country').value = billing.country || '';
  }
});
