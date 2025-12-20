# Accessible E‑Commerce Store

A fully functional, accessible e-commerce website built with **vanilla HTML, CSS, and JavaScript**. Features a complete shopping cart system with localStorage persistence.

## Quick Start

```bash
npm install
npm run dev
```

Open **http://nplocalhost:3000** in your browser.

## Features

✅ **Accessible Design**
- Semantic HTML with ARIA labels
- Keyboard navigation (Tab, Enter, Escape)
- Screen reader compatible
- High contrast and focus indicators
- Reduced motion support

✅ **Working Shopping Cart**
- Add/remove items from cart
- Adjust quantities
- Real-time cart updates
- Order summary with tax calculation
- Complete checkout flow with billing/shipping forms
- Secure payment page
- Data persists in browser (localStorage)

✅ **Product Catalog**
- 6 sample accessible products
- Product image (emoji), name, price, description
- Quantity selector before adding to cart

✅ **Responsive Design**
- Mobile-friendly layout
- Adapts to all screen sizes
- Touch-friendly buttons

## File Structure

```
index.html           → Home page with product listing
product-detail.html  → Individual product detail page
cart.html            → Shopping cart page
checkout.html        → Billing & shipping information forms
payment.html         → Payment information and order confirmation
app.js               → Core cart logic & product data
cart-page.js         → Cart page specific functionality
product-detail.js    → Product detail page logic
checkout.js          → Checkout form handling
payment.js           → Payment form handling
styles.css           → All styling (responsive + accessible)
package.json         → Project dependencies (just http-server)
```

## How It Works

1. **Browse Products:** View all 6 products on the home page
2. **View Details:** Click "View Details" to see full product information
3. **Add to Cart:** Select quantity and click "Add to Cart" from home or detail page
4. **View Cart:** Click cart badge in header to see your items
5. **Manage Items:** Adjust quantities or remove items in cart
6. **Checkout:** Enter billing and shipping information
7. **Payment:** Enter payment details and confirm order
8. **Confirmation:** Order is confirmed and cart is cleared
9. **Data Persistence:** Cart and checkout data saved to browser's localStorage

## Accessibility Features

- **Semantic HTML** for screen readers
- **ARIA labels** and regions for context
- **Keyboard navigation** with visible focus
- **Color contrast** meets WCAG AA standards
- **Form labels** properly associated with inputs
- **Skip links** and main landmark
- **Reduced motion** support for animations

## Team Workflow

See [ONBOARDING.md](ONBOARDING.md) for branching, PR, and contribution guidelines.

## Development

Edit HTML/JS/CSS files directly. No build step required!

- `index.html` — Add products here
- `app.js` — Update cart logic
- `styles.css` — Adjust styling
- `cart-page.js` — Cart page logic

## Deploy

Upload all files to any static hosting (GitHub Pages, Netlify, Vercel, etc.)
 