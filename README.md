# Shopify Demo Playwright Tests

Automated UI tests for login functionality and Add to cart functionality using Playwright. Covers positive, negative, and validation scenarios to ensure a reliable authentication flow.

## Prerequisites

- Node.js (v14 or higher)  
- npm (or yarn)  
- Playwright (installed via npm)

## Setup

\`\`\`bash
npm install
npx playwright install
\`\`\`

## Running Tests

Run all tests headlessly:

\`\`\`bash
npx playwright test
\`\`\`

Run a specific test by name:

\`\`\`bash
npx playwright test -g "user can login successfully"
\`\`\`

Run tests with browser UI visible:

\`\`\`bash
npx playwright test --headed
\`\`\`

## Test Coverage

- Successful login  
- Invalid login credentials  
- Input validations  
- UI behavior (password masking, error messages)

## Reporting

After running tests, generate and view the HTML report:

\`\`\`bash
npx playwright show-report
\`\`\`

## Contributing

Feel free to submit issues or pull requests to improve the tests.

