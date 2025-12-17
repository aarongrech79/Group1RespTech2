# Testing & Running Guide

This document provides comprehensive instructions for testing and running the Accessible E-Commerce application locally, including accessibility testing procedures.

---

## Table of Contents

1. [Installation](#installation)
2. [Running the Application](#running-the-application)
3. [Testing Functionality](#testing-functionality)
4. [Accessibility Testing](#accessibility-testing)
5. [Keyboard Navigation](#keyboard-navigation)
6. [Screen Reader Testing](#screen-reader-testing)
7. [Browser DevTools Testing](#browser-devtools-testing)
8. [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

Ensure you have **Node.js 16+** installed. Check your version:

```bash
node --version
```

If not installed, download from https://nodejs.org

### Install Dependencies

```bash
cd "path/to/Assignment1RespTech2"
npm install
```

Expected output:
```
added 1 package, and audited 2 packages in 1s
```

---

## Running the Application

### Start the Dev Server

```bash
npm run dev
```

You should see:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:3000
  http://192.168.x.x:3000
```

### Open in Browser

- **Local:** http://localhost:3000
- **Network:** http://127.0.0.1:3000 (works on your machine)

### Stop the Server

Press `Ctrl+C` in the terminal

---

## Testing Functionality

### Test Case 1: Browse Products

1. **Load home page** → http://localhost:3000
2. **Verify:**
   - ✓ 6 products displayed with images, names, descriptions, prices
   - ✓ Product cards are visually distinct
   - ✓ "Add to Cart" buttons visible
   - ✓ Quantity selectors work (1–10 items)

### Test Case 2: Add Item to Cart

1. **Select a product** (e.g., Accessible Sneakers)
2. **Click quantity dropdown** → Select "2"
3. **Click "Add to Cart"** button
4. **Verify:**
   - ✓ Green notification appears: "Added 'Accessible Sneakers' to cart!"
   - ✓ Cart badge updates: shows "2"
   - ✓ Notification fades after 3 seconds

### Test Case 3: Add Multiple Products

1. **Add different products:**
   - Product 1: Qty 1
   - Product 2: Qty 3
   - Product 3: Qty 2
2. **Verify:**
   - ✓ Cart badge shows "6" (total items)
   - ✓ Notifications appear for each product

### Test Case 4: View Shopping Cart

1. **Click "Cart" link** in header
2. **Verify:**
   - ✓ All added items display with:
     - Product name
     - Price per unit
     - Quantity selector
     - Item total
     - Remove button
   - ✓ Order summary shows:
     - Subtotal
     - Tax (10%)
     - Total

### Test Case 5: Update Cart Quantities

1. **On cart page**, change quantity for an item:
   - Select new quantity from input field
   - Click "Update" button
2. **Verify:**
   - ✓ Item total recalculates
   - ✓ Subtotal, tax, and total update
   - ✓ Notification: "Item updated"

### Test Case 6: Remove Items

1. **Click "Remove"** on any cart item
2. **Verify:**
   - ✓ Item disappears from cart
   - ✓ Totals recalculate
   - ✓ Cart badge updates
   - ✓ Notification: "Item removed from cart"

### Test Case 7: Checkout

1. **From cart page**, click **"Proceed to Checkout"**
2. **Verify:**
   - ✓ Notification: "Order confirmed!"
   - ✓ Page redirects to home page after 2 seconds
   - ✓ Cart is cleared (badge shows "0")
   - ✓ Notification: "Your cart is empty"

### Test Case 8: Cart Persistence

1. **Add products to cart**
2. **Refresh page** (F5)
3. **Verify:**
   - ✓ Cart items still present
   - ✓ Quantities preserved
   - ✓ Cart badge shows correct total

---

## Accessibility Testing

### Test Case 1: Skip Link (Keyboard)

1. **Load home page**
2. **Press Tab key** (first press)
3. **Verify:**
   - ✓ "Skip to main content" link appears at top-left
   - ✓ Link has blue outline (focus indicator)
   - ✓ Link is clearly visible and readable
4. **Press Enter**
   - ✓ Focus moves to main content
5. **Press Tab again**
   - ✓ Skip link hides (only visible on focus)

### Test Case 2: Keyboard Navigation

1. **Home Page:**
   - Press `Tab` repeatedly
   - Verify focus moves through:
     1. Skip link
     2. Logo link
     3. Home nav link
     4. Cart nav link
     5. Quantity selectors (first product)
     6. "Add to Cart" buttons
     7. Footer links
   - ✓ Focus order is logical (top-to-bottom, left-to-right)
   - ✓ All interactive elements are reachable

2. **Adding Products with Keyboard:**
   - Navigate to first product
   - Press `Tab` to reach quantity dropdown
   - Press arrow keys to select quantity
   - Press `Tab` to reach "Add to Cart"
   - Press `Enter` to submit
   - ✓ Product added to cart

3. **Cart Page Navigation:**
   - Press `Tab` through cart items
   - Focus reaches: product image, name, quantity input, update button, remove button
   - ✓ All controls accessible via keyboard

4. **Form Submission:**
   - Navigate to quantity field
   - Don't select a quantity (leave blank)
   - Press `Enter` on "Add to Cart"
   - ✓ Error message appears
   - ✓ Focus returns to quantity field

---

## Screen Reader Testing

### Windows: NVDA (Free & Open Source)

**Download:** https://www.nvaccess.org/

1. **Start NVDA** (Ctrl+Alt+N or run after install)
2. **Navigate home page**
   - NVDA reads: "Skip to main content, button"
   - NVDA reads heading: "Featured Products, heading level 1"
   - NVDA reads product: "Accessible Sneakers, heading level 3, $79.99, Comfortable, wide-fit sneakers"
   - NVDA reads: "Quantity (required), combobox, default -- Select quantity --"
   - NVDA reads: "Add Accessible Sneakers to cart, button"

3. **Add item to cart**
   - Navigate to product
   - Select quantity: "2"
   - Activate "Add to Cart"
   - ✓ NVDA announces: "Added 'Accessible Sneakers' to cart! (status)"
   - ✓ Cart badge updates

4. **Navigate to cart**
   - Press Tab through cart items
   - ✓ NVDA announces: "Cart item: Accessible Sneakers, Price: 79.99 dollars, Quantity: 2 (region)"
   - ✓ NVDA reads quantity: "Quantity for Accessible Sneakers, 2, spinbutton"
   - ✓ NVDA reads: "Remove Accessible Sneakers from cart, button"

### Mac: VoiceOver (Built-in)

1. **Start VoiceOver:** Cmd+F5
2. **Web rotor:** Press VO (Control+Option) + U
3. **Navigate by headings:** Verify H1, H2 structure
4. **Verify announcements:**
   - Skip link reads correctly
   - Form labels associated with inputs
   - Buttons have accessible names

---

## Browser DevTools Testing

### Chrome/Edge: Accessibility Inspector

1. **Open DevTools:** F12
2. **Go to:** Elements tab → Accessibility panel (on right)
3. **Inspect:**
   - Products: Check ARIA labels and semantic structure
   - Buttons: Verify accessible names
   - Forms: Check label associations
   - Headings: Verify hierarchy

### Color Contrast Check

1. **Inspect element** (F12, right-click element)
2. **Styles panel** → hover over color
3. **Verify contrast ratios:**
   - Primary buttons: ✓ (should show "AA" or better)
   - Text on backgrounds: ✓ (4.5:1 minimum)

### WAVE Browser Extension

1. **Install:** https://wave.webaim.org/extension/
2. **Open site:** http://localhost:3000
3. **Click WAVE icon** → Analyze
4. **Verify:**
   - ✓ No errors (red icons)
   - ✓ Few or no warnings (yellow icons)
   - ✓ Good structure (headings, landmarks)

### Axe DevTools

1. **Install:** https://www.deque.com/axe/devtools/
2. **Open site:** http://localhost:3000
3. **Click Axe icon** → Scan
4. **Verify:**
   - ✓ No critical issues
   - ✓ No serious issues

---

## High Contrast Mode Testing

### Windows 10/11

1. **Enable High Contrast:**
   - Settings → Ease of Access → Display → High Contrast
   - Select a high contrast theme (e.g., "High Contrast Black")

2. **Reload app:** http://localhost:3000

3. **Verify:**
   - ✓ All text clearly visible
   - ✓ Buttons have clear borders
   - ✓ Focus indicators obvious
   - ✓ No information lost

### macOS

1. **Enable Increase Contrast:**
   - System Preferences → Accessibility → Display
   - Check "Increase contrast"

2. **Reload app**

3. **Verify visual clarity**

---

## Reduced Motion Testing

### Windows & Mac

1. **Enable Reduced Motion:**
   - Windows: Settings → Ease of Access → Display → Show animations
   - Mac: System Preferences → Accessibility → Display → Reduce motion

2. **Test animations:**
   - Add product to cart
   - ✓ Notification appears instantly (no fade-in)
   - ✓ No animations or transitions

---

## Browser Testing Checklist

Test the application on:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✓ |
| Firefox | Latest | ✓ |
| Safari | Latest (Mac) | ✓ |
| Edge | Latest | ✓ |
| Mobile Safari | iOS 14+ | ✓ |
| Chrome Mobile | Android 10+ | ✓ |

### Responsive Testing

1. **DevTools:** F12 → Toggle device toolbar (Ctrl+Shift+M)
2. **Test sizes:**
   - 375px (Mobile)
   - 768px (Tablet)
   - 1024px (Desktop)
3. **Verify:**
   - ✓ Layout adapts correctly
   - ✓ Touch targets remain 44x44px
   - ✓ Text remains readable
   - ✓ Buttons accessible

---

## Performance Testing

### Check Load Time

```bash
# Open DevTools (F12) → Network tab
# Reload page (Ctrl+R)
# Check:
# - Total load time: < 2 seconds
# - File sizes: HTML < 50KB, CSS < 50KB, JS < 50KB
```

### Lighthouse Audit

1. **DevTools:** F12 → Lighthouse tab
2. **Click "Analyze page"**
3. **Verify:**
   - ✓ Performance: > 90
   - ✓ Accessibility: 100
   - ✓ Best Practices: > 85

---

## Troubleshooting

### Issue: "Port 3000 already in use"

**Solution:**
```bash
npm run dev -- -p 3001
```

Then open: http://localhost:3001

### Issue: Cart data not persisting

**Solution:**
1. Check browser localStorage:
   - F12 → Application → Storage → Local Storage
   - Look for key: "cart"
   - Should show JSON array of items

2. Clear and restart:
   ```bash
   # In DevTools Console:
   localStorage.clear()
   # Refresh page
   ```

### Issue: Styles not loading

**Solution:**
```bash
# Hard refresh (clears cache):
# Windows/Linux: Ctrl+Shift+R
# Mac: Cmd+Shift+R
```

### Issue: Products not displaying

**Solution:**
1. **Open DevTools:** F12
2. **Check Console** for errors
3. **Verify JavaScript:** 
   - Check that `app.js` and `cart-page.js` load
   - No red errors in console
4. **Restart server:**
   ```bash
   # Stop: Ctrl+C
   # Restart: npm run dev
   ```

### Issue: "Required" form validation not working

**Solution:**
1. Verify using modern browser (Chrome, Firefox, Safari, Edge)
2. HTML5 form validation should work automatically
3. Check DevTools Console for any errors

---

## Continuous Testing

### For Team Development

1. **Before each commit:**
   ```bash
   npm run dev
   # Manually test one feature
   # Check: F12 → Console (no errors)
   # Keyboard navigate: Tab through page
   ```

2. **Weekly accessibility audit:**
   - Run WAVE extension scan
   - Run Axe DevTools scan
   - Test with screen reader (10 min)
   - Test keyboard navigation (5 min)

3. **Monthly full audit:**
   - Test on all browsers
   - Test on mobile devices
   - Run Lighthouse
   - Gather feedback from team

---

## Additional Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Article on Keyboard Accessibility](https://webaim.org/articles/keyboard/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## Quick Test Summary (5 Minutes)

```
1. npm run dev
2. http://localhost:3000
3. Tab key → Skip link appears? ✓
4. Add product → Notification shows? ✓
5. View cart → Items display? ✓
6. Update quantity → Total updates? ✓
7. Checkout → Cart clears? ✓
8. F12 → Console → No errors? ✓
```

**If all checks pass: Application is ready! ✓**
