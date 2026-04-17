# Testable Profile Card

## ▶How to Run Locally

1. Clone the repository:

2. Navigate into the project folder:

```bash
cd testable-profile-card
```

3. Open the project:

- Double-click `index.html`, OR
- Use a live server (recommended for development)

## 🧪 Testing Notes

This project is built to support automated testing using `data-testid` attributes.

Key considerations:

- All required test IDs are implemented exactly as specified
- Time value reflects `Date.now()` at render and updates dynamically
- Social links are individually testable (e.g., `test-user-social-twitter`)

---

## ⚠️ Known Limitations

- Time updates every second (not real-time to the millisecond to avoid performance issues)
- Avatar currently uses a static URL (no upload functionality implemented)

---

## 📌 Additional Notes

- Focus styles are preserved for accessibility (`:focus-visible`)
- External links open securely using:

  ```
  target="_blank" rel="noopener noreferrer"
  ```
