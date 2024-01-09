
// Import necessary modules or classes if needed
import { Customer, CustomerBuilder } from 'C:\Users\Thiru.Sakthivel\juice-shop\cypress\integration';

describe('Juice Shop Homepage', () => {
  let customer;

  // Before block for setup
  before(() => {
    // Visit the Juice Shop application
    cy.visit('http://localhost:3000');
    // Clear cookies or local storage
    cy.clearCookie('your-cookie-name');
    // Or
    cy.clearLocalStorage();

    // Manually register a user and record email and password
    cy.get('[data-cy=register]').click();
    cy.get('[data-cy=email]').type('recorded-email@example.com');
    cy.get('[data-cy=password]').type('recorded-password');
    cy.get('[data-cy=repeatPassword]').type('recorded-password');
    cy.get('[data-cy=registerButton]').click();

    // Get the registered email and password from the registration form
    const registeredEmail = 'sakthivel.thirunavukarasu95@gmail.com'; 
    const registeredPassword = 'Welcome@2023'; 
    // Update Customer object with recorded email and password
    customer = new CustomerBuilder()
      .setEmail(registeredEmail)
      .setPassword(registeredPassword)
      .build();
      // Log in the user after registration
    cy.get('[data-cy=loginButton]').click();
    cy.get('[data-cy=email]').type(customer.getEmail());
    cy.get('[data-cy=password]').type(customer.getPassword());
    cy.get('[data-cy=loginButton]').click();

  });

 // Test case: Check if the homepage displays user information
it('should display user information on the homepage', () => {
  // Assuming there's an element on the homepage showing user information
  cy.get('.user-info').should('contain.text', customer.getEmail());
  // Assert registration success
  cy.get('[data-cy=registrationSuccessMessage]').should('be.visible');
});


  });
});
