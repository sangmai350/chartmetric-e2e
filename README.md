# CHARTMETRIC E2E Testing with Playwright

This project contains end-to-end (E2E) tests for our application using [Playwright](https://playwright.dev/), a Node.js library to automate Chromium, Firefox, and WebKit with a single API.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Debugging](#debugging)
- [Resources](#resources)

## Installation

To get started, you need to have [Node.js](https://nodejs.org/) installed. Then, you can install the necessary dependencies.

1. Clone the repository:
   ``` 
   git clone https://github.com/sangmai350/chartmetric-e2e.git
   cd chartmetric-e2e
   ```

2. In this project, we use yarn as a package manager.
    <br>
   Once you have npm installed, you can run:
    ```
    npm install --global yarn
    ```

3. Install the dependencies:
    ```
    yarn install
    ```

4. Install Playwright browsers:
    ```
    yarn playwright install
    ```

## Usage
### Project Structure
Your project directory should look something like this:
```
chartmetric-e2e/
├── tests/
│   ├── example.spec.js
│   └── ...
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Writing Tests
Create your test files inside the tests directory. Here's an example of a simple test 
```
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://chartmetric.com');
  const title = await page.title();
  expect(title).toBe('Chartmetric');
});
```

## Running Tests
To run your tests, use the following command:
```
yarn playwright test
```
This will run all the tests located in the tests directory.

## Configuration
You can configure Playwright settings in the `playwright.config.js` file

## Debugging
To debug tests, you can run them in non-headless mode and use Playwright's built-in tools:
```
yarn playwright test --headed
```
For more detailed debugging, you can use the following command to open the Playwright Inspector:
```
yarn playwright test --debug
```

## Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)








