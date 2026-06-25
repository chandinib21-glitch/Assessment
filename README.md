# TestMu AI Playwright Assignment

This repository contains a Playwright test suite for the TestMu AI Selenium Playground assignment.

## What is included

- `tests/assignment.spec.js` — test scenarios for:
  - Simple Form Demo
  - Drag & Drop Sliders
  - Input Form Submit
- `playwright.config.js` — Playwright configuration enabling:
  - browser projects: Chromium, Firefox, WebKit
  - screenshots on failure
  - video recording
  - HAR recording
  - trace retention on failure
- `.gitignore` — excludes local environment, dependencies, and result artifacts

## Run tests

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run Playwright tests:
   ```bash
   npx playwright test
   ```
3. View the HTML report:
   ```bash
   npx playwright show-report
   ```

## Notes

- The assignment tests use at least 3 different locator strategies: CSS IDs, visible button text, and select option by label.
- Network logs, screenshots, video, and console capture are enabled in Playwright via `playwright.config.js`.
