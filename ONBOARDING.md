# Team Onboarding Guide

Welcome to the **Accessible E‑Commerce** project! This guide helps your 7-person team get up and running quickly.

---

## Quick Start (5 minutes)

### 1. Clone the repo
```bash
git clone https://github.com/aarongrech79/Group1RespTech2.git
cd Group1RespTech2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

Open http://localhost:3000 in your browser. You should see the product listing page.

---

## Project Structure

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
payment.js           → Payment form handling & validation
styles.css           → All styling (responsive + WCAG AA accessible)
.github/
  workflows/         → CI/CD (runs on every push)
```

---

## Workflow for the Team

### For Features & Fixes

1. **Branch off `main`**
   ```bash
   git checkout -b feature/my-feature
   # or git checkout -b fix/bug-description
   ```

2. **Make changes locally**
   - Follow the **Accessibility Checklist** in [accessibility.md](accessibility.md)
   - Use semantic HTML, ARIA labels, keyboard navigation, focus styles

3. **Test locally**
   ```bash
   npm run dev      # Start dev server
   ```
   - Test all pages: Home, Product Details, Cart, Checkout, Payment
   - Verify forms work correctly with validation
   - Test keyboard navigation (Tab, Enter, Escape)

4. **Push your branch**
   ```bash
   git add .
   git commit -m "Clear, descriptive message"
   git push origin feature/my-feature
   ```

5. **Open a Pull Request on GitHub**
   - Describe your changes clearly
   - Link any related issues
   - Request review from at least one teammate
   - CI will automatically run (build & lint)

6. **After approval, merge to `main`** (via GitHub UI)
   - Delete the branch after merging

---

## Role Assignments (Team of 7)

Update [CODEOWNERS](CODEOWNERS) with your GitHub handles:

| Role | GitHub Handles | Responsibility |
|------|---|---|
| Lead / Product | @person1 | Product decisions, PR reviews |
| Frontend (2–3) | @person2, @person3, @person4 | HTML/CSS/JS pages, forms, UI |
| E-commerce Flow | @person5 | Cart, checkout, payment logic |
| Accessibility & QA | @person6 | A11y audits, WCAG AA compliance testing |
| DevOps / CI | @person7 | GitHub Actions, static hosting deployments |

---

## Accessibility Expectations

Every PR must follow the **Accessibility Checklist**:
- ✓ Semantic HTML (`<button>`, `<form>`, `<nav>`, etc.)
- ✓ Keyboard operable (Tab, Enter, Escape)
- ✓ Visible focus styles
- ✓ ARIA labels only when needed
- ✓ Color contrast ≥ 4.5:1
- ✓ Tested with screen reader (NVDA/VoiceOver) or keyboard-only

**Accessibility Reviewer** should spot-check each PR before merge.

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server (http://localhost:3000) |
| `npm install` | Install/update dependencies |
| `git status` | Check branch & uncommitted changes |
| `git log --online` | View commit history |
| `git branch -a` | List all branches |

---

## CI/CD (GitHub Actions)

The **CI workflow** runs automatically on every push and PR:
- Installs dependencies
- Validates project setup
- Ensures all files are present

✅ **All checks must pass** before merging.

View results in **Actions** tab on GitHub.

---

## Testing the E-commerce Flow

Test the complete user journey:

1. **Home Page** → Browse 6 products, view details
2. **Product Detail** → View full product info, add to cart
3. **Shopping Cart** → Update quantities, remove items, see totals
4. **Checkout** → Fill billing & shipping forms (use "same as billing" checkbox)
5. **Payment** → Enter card details, review order summary
6. **Confirmation** → Order confirmed, cart cleared

**Key Features to Test:**
- Cart badge updates in real-time
- localStorage persistence (refresh page, cart remains)
- Form validation (required fields, card expiry date)
- Keyboard navigation throughout
- Screen reader announcements

---

## Communication

- **PR Reviews:** Ask for feedback in the PR description; respond within 24h.
- **Blockers:** Post in team chat or comments.
- **Accessibility questions?** Tag the A11y reviewer.
- **Deployment ready?** Tag the DevOps lead.

---

## Next Steps

1. ✓ **All team members:** Clone repo, run `npm install` & `npm run dev` locally.
2. Update [CODEOWNERS](CODEOWNERS) with team GitHub handles.
3. Enable **branch protection** on `main`:
   - Go to **Settings → Branches → Add rule**
   - Require 1–2 PR reviews, status checks to pass
4. Start opening features branches and PRs!

---

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Node version issue?**
Use Node 18+ (check with `node --version`). Install from https://nodejs.org if needed.

**Git authentication fails?**
Create a Personal Access Token: https://github.com/settings/tokens → `repo` scope.

---

## Questions?

Check these guides:
- [HTML_STYLE_GUIDE.md](HTML_STYLE_GUIDE.md) - **HTML patterns and component templates**
- [README.md](README.md) - Project overview
- [CONTRIBUTING.md](CONTRIBUTING.md) - PR process
- [accessibility.md](accessibility.md) - Accessibility requirements

Happy coding! 🚀
