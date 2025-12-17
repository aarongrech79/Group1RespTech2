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
src/
  pages/          → Next.js routes (index, product detail)
  components/     → React components (Layout, ProductCard)
  styles/         → Global CSS with Tailwind
.github/
  workflows/      → CI/CD (runs on every push)
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
   npm run build    # Check for TypeScript errors
   npm run dev      # Start dev server
   ```

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
| Frontend (2–3) | @person2, @person3, @person4 | Pages, components, UI |
| Backend Integration | @person5 | API routes, database setup |
| Accessibility & QA | @person6 | A11y audits, keyboard/AT testing |
| DevOps / CI | @person7 | GitHub Actions, deployments |

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
| `npm run build` | Build for production; catch TypeScript errors |
| `npm run lint` | Run ESLint (configure as needed) |
| `npm install` | Install/update dependencies |
| `git status` | Check branch & uncommitted changes |
| `git log --oneline` | View commit history |

---

## CI/CD (GitHub Actions)

The **CI workflow** runs automatically on every push and PR:
- Installs dependencies
- Runs `npm run build`

✅ **All checks must pass** before merging.

View results in **Actions** tab on GitHub.

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

Check [README.md](README.md), [CONTRIBUTING.md](CONTRIBUTING.md), or [accessibility.md](accessibility.md).

Happy coding! 🚀
