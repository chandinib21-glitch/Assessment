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
## Run on LambdaTest / TestMu AI

To run the same Playwright tests on the TestMu AI cloud, set your credentials and use the `lambdatest` project.

1. Export your credentials locally:
   ```bash
   export LT_USERNAME="chandinib21"
   export LT_ACCESS_KEY="LT_ZYCtrr7m5i1JEPmpzbaWaTbSX1jWEH6vYeZViBBx6MXJzvv"
   ```

2. Optionally, set a friendly build name:
   ```bash
   export LT_BUILD_NAME="Assessment Playwright Build"
   export LT_PROJECT_NAME="Assessment"
   export LT_TEST_NAME="Assignment Playwright Test"
   ```

3. The LambdaTest/TestMu remote capability is configured to capture video in the cloud:
   ```js
   'LT:Options': {
     user: process.env.LT_USERNAME,
     accessKey: process.env.LT_ACCESS_KEY,
     build: process.env.LT_BUILD_NAME,
     project: process.env.LT_PROJECT_NAME,
     name: process.env.LT_TEST_NAME,
     w3c: true,
     video: true,
     network: true,
     console: true,
   }
   ```

4. Run the remote project:
   ```bash
   npx playwright test --project=lambdatest
   ```

5. Open the TestMu AI Automation Dashboard to view the session, video, and test details.

> Do not commit your access key to source control.
## Notes

- The assignment tests use at least 3 different locator strategies: CSS IDs, visible button text, and select option by label.
- Network logs, screenshots, video, and console capture are enabled in Playwright via `playwright.config.js`.
