# Accessibility Checklist

Basic items to follow when developing UI features:

- Use semantic HTML (header, nav, main, footer, button, form, label).
- Ensure focus order is logical and visible; provide strong visible focus styles.
- Provide ARIA labels only when semantics are insufficient.
- Use color contrast >= 4.5:1 for normal text.
- Ensure all interactive controls are keyboard operable.
- Test with a screen reader (NVDA/VoiceOver) and keyboard-only.
- Provide skip links or landmarks for long pages.

Component guidance
- Buttons: use <button> elements, not clickable divs.
- Forms: associate <label> with inputs using `htmlFor` / `id`.
- Images: provide descriptive alt text or role="presentation" when decorative.
