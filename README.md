# Mantis Bug Tracker UI Automation
This is a project that is based on automating the Mantis BT UI, using the Cypress Framework.

- To execute the tests, page objects are used, stored in: **/cypress/support/pageObjects**

# Initialize the project
- npm install
- npm install cypress
- npm i -D @cypress/grep

# Run all tests
- npx cypress run
- npx cypress open

# Run smoke tests
- npx cypress run --env grep="Smoke"

# Run regression tests
- npx cypress run --env grep="Regression"
