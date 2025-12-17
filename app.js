// Product data with proper descriptions for accessibility
const products = [
  {
    id: 'p1',
    name: 'Accessible Sneakers',
    price: 79.99,
    description: 'Comfortable, wide-fit sneakers with excellent support for all-day wear.',
    image: '👟',
    imageAlt: 'Shoe icon representing sneakers'
  },
  {
    id: 'p2',
    name: 'Noise-Cancelling Headphones',
    price: 129.99,
    description: 'Lightweight and comfortable headphones for long listening sessions with active noise cancellation.',
    image: '🎧',
    imageAlt: 'Headphones icon'
  },
  {
    id: 'p3',
    name: 'Braille Keyboard Cover',
    price: 29.99,
    description: 'High-contrast, tactile markers for keyboard navigation and accessibility.',
    image: '⌨️',
    imageAlt: 'Keyboard icon representing keyboard accessories'
  },
  {
    id: 'p4',
    name: 'Screen Reader Compatible Mouse',
    price: 39.99,
    description: 'Ergonomic design with accessible button layout and tactile feedback.',
    image: '🖱️',
    imageAlt: 'Mouse icon'
  },
  {
    id: 'p5',
    name: 'High Contrast Monitor Filter',
    price: 49.99,
    description: 'Reduces glare and improves text readability for low vision users.',
    image: '🖥️',
    imageAlt: 'Monitor icon representing display accessories'
  },
  {
    id: 'p6',
    name: 'Accessible Desk Lamp',
    price: 59.99,
    description: 'Dimmable LED lamp with simple controls and voice control integration support.',
    image: '💡',
    imageAlt: 'Lightbulb icon representing lighting'
  }
];

// Shopping Cart Object
const ShoppingCart = {
  // Initialize cart from localStorage
  init() {
    this.loadCart();
    this.updateCartBadge();
    if (document.getElementById('products-container')) {
      this.renderProducts();
    }
  },

  // Get cart from localStorage
  loadCart() {
    const stored = localStorage.getItem('cart');
    this.items = stored ? JSON.parse(stored) : [];
  },

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.updateCartBadge();
  },

  // Add item to cart
  addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.items.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showNotification(`Added "${product.name}" to cart!`);
  },

  // Remove item from cart
  removeFromCart(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  },

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  },

  // Get cart total
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Clear cart
  clear() {
    this.items = [];
    this.saveCart();
  },

  // Update cart badge
  updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
      const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
      badge.textContent = count;
      badge.setAttribute('aria-label', `${count} items in cart`);
    }
  },

  // Render products on home page
  renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = products.map(product => `
      <article class="product-card" role="region" aria-labelledby="product-${product.id}">
        <div class="product-image" role="img" aria-label="${product.imageAlt}">${product.image}</div>
        <h3 id="product-${product.id}">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price" aria-label="Price: ${product.price} dollars">$${product.price.toFixed(2)}</p>
        
        <form class="product-actions" onsubmit="event.preventDefault(); addToCartHandler('${product.id}')">
          <label for="qty-${product.id}">Quantity (required):</label>
          <select id="qty-${product.id}" class="qty-select" required aria-label="Quantity for ${product.name}" aria-required="true">
            <option value="">-- Select quantity --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          
          <button type="submit" class="btn btn-primary" aria-label="Add ${product.name} to cart">
            Add to Cart
          </button>
        </form>
      </article>
    `).join('');
  },

  // Show temporary notification with accessibility
  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.setAttribute('aria-atomic', 'true');
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
};

// Handler function for add to cart with validation
function addToCartHandler(productId) {
  const qtySelect = document.getElementById(`qty-${productId}`);
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
  ShoppingCart.init();
});
