# HTML Style Guide

This guide ensures all team members write **consistent, accessible HTML** that works with our existing styles.

---

## Page Template
np
Use this template for **every new page**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Page description here]">
  <title>[Page Title] - Accessible E-Commerce Store</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Skip to main content link for keyboard users -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <div id="app">
    <!-- Header -->
    <header class="header" role="banner">
      <div class="header-content">
        <h1 class="site-title">
          <a href="index.html" class="logo-link" aria-label="Accessible Shop - Home page">Accessible Shop</a>
        </h1>
        <nav aria-label="Main navigation">
          <ul class="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="cart.html">Cart <span class="cart-badge" id="cart-count">0</span></a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container" id="main-content" role="main">
      <h1>[Page Heading]</h1>
      
      <!-- Your content here -->
      
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
      <p>&copy; 2025 Accessible E-Commerce. WCAG AA Compliant. All rights reserved.</p>
    </footer>
  </div>

  <script src="app.js"></script>
  <!-- Add additional scripts if needed -->
</body>
</html>
```

---

## Common Components

### Buttons

**Primary Button (Main actions)**
```html
<button type="submit" class="btn btn-primary">
  Continue
</button>
```

**Secondary Button (Back, Cancel)**
```html
<button type="button" class="btn btn-secondary">
  Back
</button>
```

**Link styled as button**
```html
<a href="page.html" class="btn btn-primary">
  View Details
</a>
```

**Danger Button (Delete, Remove)**
```html
<button type="button" class="btn btn-danger">
  Remove
</button>
```

**Small Button**
```html
<button type="button" class="btn btn-small">
  Update
</button>
```

---

### Forms

**Form Section with Fields**
```html
<section class="form-section">
  <h2>Section Heading</h2>
  
  <!-- Text Input -->
  <div class="form-group">
    <label for="field-name">Field Label <span class="required">*</span></label>
    <input 
      type="text" 
      id="field-name" 
      name="field-name" 
      required 
      aria-required="true"
      autocomplete="[autocomplete-value]"
    >
  </div>

  <!-- Email Input -->
  <div class="form-group">
    <label for="email">Email Address <span class="required">*</span></label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      aria-required="true"
      autocomplete="email"
    >
  </div>

  <!-- Select Dropdown -->
  <div class="form-group">
    <label for="country">Country <span class="required">*</span></label>
    <select id="country" name="country" required aria-required="true">
      <option value="">-- Select Country --</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="GB">United Kingdom</option>
      <option value="MT">Malta</option>
    </select>
  </div>

  <!-- Checkbox -->
  <div class="form-group checkbox-group">
    <input type="checkbox" id="agree" name="agree">
    <label for="agree">I agree to the terms</label>
  </div>
</section>
```

**Two-Column Form Layout**
```html
<div class="form-row">
  <div class="form-group">
    <label for="city">City <span class="required">*</span></label>
    <input type="text" id="city" name="city" required aria-required="true">
  </div>
  
  <div class="form-group">
    <label for="state">State <span class="required">*</span></label>
    <input type="text" id="state" name="state" required aria-required="true">
  </div>
</div>
```

**Form Actions (Buttons at bottom)**
```html
<div class="form-actions">
  <a href="previous-page.html" class="btn btn-secondary">Back</a>
  <button type="submit" class="btn btn-primary">Continue</button>
</div>
```

---

### Product Cards

```html
<article class="product-card" role="region" aria-labelledby="product-[id]">
  <div class="product-image" role="img" aria-label="[Image description]">
    [Emoji or image]
  </div>
  <h3 id="product-[id]">[Product Name]</h3>
  <p class="product-description">[Description text]</p>
  <p class="product-price" aria-label="Price: [X] dollars">$[X.XX]</p>
  
  <a href="product-detail.html?id=[id]" class="btn btn-secondary" aria-label="View details for [Product Name]">
    View Details
  </a>
</article>
```

---

### Grid Layout (Products, Items)

```html
<div class="products-grid" id="products-container">
  <!-- Product cards go here -->
</div>
```

---

### Order Summary Sidebar

```html
<aside class="checkout-summary" aria-labelledby="summary-heading">
  <h2 id="summary-heading">Order Summary</h2>
  
  <div id="summary-items-container">
    <!-- Items rendered by JavaScript -->
  </div>
  
  <div class="summary-row">
    <span>Subtotal:</span>
    <span id="subtotal">$0.00</span>
  </div>
  <div class="summary-row">
    <span>Tax (10%):</span>
    <span id="tax">$0.00</span>
  </div>
  <div class="summary-row total">
    <span>Total:</span>
    <span id="total">$0.00</span>
  </div>
</aside>
```

---

### Summary Items (Product List)

```html
<div class="summary-items">
  <div class="summary-item">
    <span class="summary-item-name">[Product Name] × [Qty]</span>
    <span class="summary-item-price">$[XX.XX]</span>
  </div>
  <!-- More items... -->
</div>
```

---

### Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="index.html">Home</a></li>
    <li><a href="category.html">Category</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

---

### Progress Steps (Checkout Flow)

```html
<div class="checkout-progress">
  <ol class="progress-steps">
    <li class="active">Billing & Shipping</li>
    <li>Payment</li>
    <li>Confirmation</li>
  </ol>
</div>
```

---

## Class Naming Rules

| Element Type | Class Name | Example |
|-------------|------------|---------|
| Container | `.container` | Main content wrapper |
| Header | `.header` | Page header |
| Footer | `.footer` | Page footer |
| Navigation | `.nav-list` | Navigation menu |
| Button Primary | `.btn .btn-primary` | Main action buttons |
| Button Secondary | `.btn .btn-secondary` | Secondary actions |
| Button Danger | `.btn .btn-danger` | Delete/Remove actions |
| Form Section | `.form-section` | Group of form fields |
| Form Group | `.form-group` | Single field container |
| Form Row | `.form-row` | Two-column field layout |
| Form Actions | `.form-actions` | Button container at form bottom |
| Product Card | `.product-card` | Individual product |
| Products Grid | `.products-grid` | Grid of products |
| Summary Row | `.summary-row` | Price breakdown row |
| Cart Item | `.cart-item` | Cart item row |

---

## Required Accessibility Features

### 1. Skip Link (Every Page)
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### 2. Semantic HTML
- Use `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`
- Always use `<button>` for actions, `<a>` for links

### 3. Form Labels
```html
<!-- ✅ CORRECT -->
<label for="email">Email</label>
<input type="email" id="email" name="email">

<!-- ❌ WRONG - Don't nest input inside label without for/id -->
<label>Email <input type="email"></label>
```

### 4. Required Fields
```html
<label for="name">Name <span class="required">*</span></label>
<input type="text" id="name" required aria-required="true">
```

### 5. ARIA Labels for Icons/Images
```html
<button aria-label="Remove item from cart">🗑️</button>
<div role="img" aria-label="Laptop computer">💻</div>
```

### 6. Link Descriptions
```html
<!-- ✅ CORRECT - Descriptive -->
<a href="product.html" aria-label="View details for Laptop">View Details</a>

<!-- ❌ WRONG - Not descriptive -->
<a href="product.html">Click here</a>
```

---

## JavaScript Integration

### IDs for JavaScript

Use these IDs when elements need JavaScript interaction:

| Element | ID | Purpose |
|---------|-----|---------|
| Cart count badge | `cart-count` | Updates cart quantity |
| Products container | `products-container` | Renders products |
| Cart items container | `cart-items-container` | Renders cart items |
| Subtotal | `subtotal` | Shows subtotal amount |
| Tax | `tax` | Shows tax amount |
| Total | `total` | Shows total amount |

### Event Handlers

```html
<!-- Form submission -->
<form onsubmit="handleFormSubmit(event)">
  <!-- fields -->
</form>

<!-- Button click -->
<button onclick="handleButtonClick('param')">Click</button>

<!-- Checkbox change -->
<input type="checkbox" onchange="handleCheckboxChange(this.checked)">
```

---

## Autocomplete Attributes

Use these for better UX and accessibility:

| Field | Autocomplete Value |
|-------|-------------------|
| Name | `name` |
| Email | `email` |
| Phone | `tel` |
| Address | `street-address` |
| City | `address-level2` |
| State/Province | `address-level1` |
| ZIP/Postal | `postal-code` |
| Country | `country` |
| Card Number | `cc-number` |
| Card Expiry | `cc-exp-month`, `cc-exp-year` |
| CVV | `cc-csc` |
| Cardholder Name | `cc-name` |

---

## Common Patterns

### Two-Column Layout (Forms + Sidebar)

```html
<div class="checkout-layout">
  <div class="checkout-forms">
    <!-- Forms go here -->
  </div>
  
  <aside class="checkout-summary">
    <!-- Order summary goes here -->
  </aside>
</div>
```

### Screen Reader Only Text

```html
<span class="sr-only">This text is only for screen readers</span>
```

### Required Field Indicator

```html
<label for="field">Field Name <span class="required">*</span></label>
```

---

## Don'ts ❌

1. **Don't use inline styles**
   ```html
   <!-- ❌ WRONG -->
   <div style="color: red;">Text</div>
   
   <!-- ✅ CORRECT -->
   <div class="error-text">Text</div>
   ```

2. **Don't use divs for buttons**
   ```html
   <!-- ❌ WRONG -->
   <div onclick="doSomething()">Click me</div>
   
   <!-- ✅ CORRECT -->
   <button type="button" onclick="doSomething()">Click me</button>
   ```

3. **Don't skip heading levels**
   ```html
   <!-- ❌ WRONG -->
   <h1>Page Title</h1>
   <h4>Subsection</h4>
   
   <!-- ✅ CORRECT -->
   <h1>Page Title</h1>
   <h2>Subsection</h2>
   ```

4. **Don't use placeholder as label**
   ```html
   <!-- ❌ WRONG -->
   <input type="text" placeholder="Your name">
   
   <!-- ✅ CORRECT -->
   <label for="name">Your Name</label>
   <input type="text" id="name" placeholder="John Doe">
   ```

---

## Testing Checklist

Before submitting a PR, verify:

- [ ] Skip link appears on Tab press
- [ ] All forms have labels with `for` attributes
- [ ] All buttons are `<button>` or `<a>` elements (not divs)
- [ ] Color contrast is sufficient (use browser DevTools)
- [ ] Page works with keyboard only (no mouse)
- [ ] Required fields have `required` and `aria-required="true"`
- [ ] Headings follow logical order (h1 → h2 → h3)
- [ ] All images/icons have alt text or aria-label
- [ ] Links have descriptive text (not "click here")

---

## Questions?

- See [accessibility.md](accessibility.md) for accessibility details
- See [CONTRIBUTING.md](CONTRIBUTING.md) for code review process
- Check existing pages (index.html, cart.html, checkout.html) for examples
