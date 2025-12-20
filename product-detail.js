// Product detail page logic
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderProductDetail() {
  const productId = getProductIdFromUrl();
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.getElementById('product-detail-container').innerHTML = `
      <div class="error-message">
        <h1>Product Not Found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <a href="index.html" class="btn btn-primary">Back to Products</a>
      </div>
    `;
    return;
  }

  // Update breadcrumb
  document.getElementById('breadcrumb-product').textContent = product.name;
  document.title = `${product.name} - Accessible E-Commerce Store`;

  // Render product detail
  document.getElementById('product-detail-container').innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image" role="img" aria-label="${product.imageAlt}">
        <span class="large-emoji">${product.image}</span>
      </div>

      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <p class="product-detail-price" aria-label="Price: ${product.price} dollars">$${product.price.toFixed(2)}</p>
        
        <div class="product-detail-description">
          <h2>Product Description</h2>
          <p>${product.description}</p>
        </div>

        <div class="product-detail-features">
          <h2>Features</h2>
          <ul>
            <li>High quality materials</li>
            <li>Designed for accessibility</li>
            <li>30-day money-back guarantee</li>
            <li>Free shipping on orders over $50</li>
          </ul>
        </div>

        <form class="product-detail-actions" onsubmit="event.preventDefault(); addToCartFromDetail('${product.id}')">
          <label for="detail-qty">Quantity (required):</label>
          <select id="detail-qty" class="qty-select" required aria-label="Quantity for ${product.name}" aria-required="true">
            <option value="">-- Select quantity --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          
          <button type="submit" class="btn btn-primary btn-large" aria-label="Add ${product.name} to cart">
            Add to Cart
          </button>
          
          <a href="index.html" class="btn btn-secondary">Continue Shopping</a>
        </form>
      </div>
    </div>
  `;
}

function addToCartFromDetail(productId) {
  const qtySelect = document.getElementById('detail-qty');
  const quantity = parseInt(qtySelect.value);
  
  if (!quantity || quantity < 1) {
    const product = products.find(p => p.id === productId);
    ShoppingCart.showNotification(`Please select a valid quantity for ${product.name}`);
    qtySelect.focus();
    return;
  }
  
  ShoppingCart.addToCart(productId, quantity);
  qtySelect.value = '';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProductDetail();
});
