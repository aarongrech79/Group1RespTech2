// Payment page functionality

// Format card number input with spaces
function formatCardNumber(input) {
  let value = input.value.replace(/\s/g, '');
  let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
  input.value = formattedValue;
}

// Add card number formatting on input
document.addEventListener('DOMContentLoaded', function() {
  const cardNumberInput = document.getElementById('card-number');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function() {
      formatCardNumber(this);
    });
  }
});
//new branch
// Render billing and shipping summaries
function renderAddressSummaries() {
  const billing = JSON.parse(localStorage.getItem('checkoutBilling') || '{}');
  const shipping = JSON.parse(localStorage.getItem('checkoutShipping') || '{}');
  
  if (!billing.name) {
    window.location.href = 'checkout.html';
    return;
  }
  
  const billingSummary = document.getElementById('billing-summary');
  billingSummary.innerHTML = `
    <p><strong>${billing.name}</strong></p>
    <p>${billing.address}</p>
    <p>${billing.city}, ${billing.state} ${billing.zip}</p>
    <p>${billing.country}</p>
    <p>Email: ${billing.email}</p>
    <p>Phone: ${billing.phone}</p>
  `;
  
  const shippingSummary = document.getElementById('shipping-summary');
  shippingSummary.innerHTML = `
    <p><strong>${shipping.name}</strong></p>
    <p>${shipping.address}</p>
    <p>${shipping.city}, ${shipping.state} ${shipping.zip}</p>
    <p>${shipping.country}</p>
  `;
}

// Render order items summary
function renderPaymentSummary() {
  const cart = ShoppingCart.getItems();
  const summaryContainer = document.getElementById('payment-summary-items');
  
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
  
  document.getElementById('payment-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('payment-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('payment-shipping').textContent = `$${shipping.toFixed(2)}`;
  document.getElementById('payment-total').textContent = `$${total.toFixed(2)}`;
}

// Validate card expiry date
function validateCardExpiry(month, year) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // JavaScript months are 0-indexed
  
  const selectedYear = parseInt(year);
  const selectedMonth = parseInt(month);
  
  if (selectedYear < currentYear) {
    return false;
  }
  
  if (selectedYear === currentYear && selectedMonth < currentMonth) {
    return false;
  }
  
  return true;
}

// Handle payment form submission
function handlePaymentSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  
  // Validate form
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  // Validate card expiry
  const month = document.getElementById('card-expiry-month').value;
  const year = document.getElementById('card-expiry-year').value;
  
  if (!validateCardExpiry(month, year)) {
    alert('Card expiry date is invalid or in the past. Please check the expiration date.');
    document.getElementById('card-expiry-month').focus();
    return;
  }
  
  // Collect payment information (in real app, this would be securely sent to payment processor)
  const paymentInfo = {
    cardNumber: document.getElementById('card-number').value,
    expiryMonth: month,
    expiryYear: year,
    cvv: document.getElementById('card-cvv').value,
    cardholderName: document.getElementById('card-name').value
  };
  
  // Get billing and shipping info
  const billing = JSON.parse(localStorage.getItem('checkoutBilling'));
  const shipping = JSON.parse(localStorage.getItem('checkoutShipping'));
  const cart = ShoppingCart.getItems();
  
  // Calculate final total
  const subtotal = ShoppingCart.getTotal();
  const tax = subtotal * 0.10;
  const shippingCost = 5.00;
  const total = subtotal + tax + shippingCost;
  
  // Create order object
  const order = {
    orderNumber: 'ORD-' + Date.now(),
    date: new Date().toISOString(),
    items: cart,
    billing: billing,
    shipping: shipping,
    subtotal: subtotal,
    tax: tax,
    shipping: shippingCost,
    total: total,
    status: 'confirmed'
  };
  
  // Save order to localStorage (in real app, this would go to backend)
  localStorage.setItem('lastOrder', JSON.stringify(order));
  
  // Show success message
  ShoppingCart.showNotification('Payment successful! Thank you for your order.');
  
  // Clear cart
  ShoppingCart.clear();
  
  // Clear checkout data
  localStorage.removeItem('checkoutBilling');
  localStorage.removeItem('checkoutShipping');
  
  // Redirect to confirmation page after short delay
  setTimeout(() => {
    // For now, redirect to home page with order confirmation
    // In a real app, you'd have a dedicated confirmation page
    alert(`Order Confirmed!\n\nOrder Number: ${order.orderNumber}\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    window.location.href = 'index.html';
  }, 1500);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  ShoppingCart.init();
  renderAddressSummaries();
  renderPaymentSummary();
});
