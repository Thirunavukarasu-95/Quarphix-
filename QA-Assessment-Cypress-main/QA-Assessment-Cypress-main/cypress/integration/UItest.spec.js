
// Import necessary modules or classes if needed
import { Customer, CustomerBuilder } from 'C:\Users\Thiru.Sakthivel\juice-shop\cypress\integration';


describe('Review Posting Journey', () => {
  let customer;

  // Before block for setup
  before(() => {
    // Visit the Juice Shop application
    cy.visit('http://localhost:3000');
   

    // Manually log in with the recorded credentials
    const loginEmail = 'sakthivel.thirunavukarasu95@gmail.com';
    const loginPassword = 'Welcome@2023';
    cy.get('[data-cy=loginButton]').click();
    cy.get('[data-cy=email]').type(loginEmail);
    cy.get('[data-cy=password]').type(loginPassword);
    cy.get('[data-cy=loginButton]').click();

    // Update Customer object with login email and password
    customer = new CustomerBuilder()
      .setEmail(loginEmail)
      .setPassword(loginPassword)
      .build();
  });

  // Test case: Post a review and verify its appearance
  it('should post a review and verify its appearance', () => {
    // Assuming there's a button to navigate to the review page
    cy.get('[data-cy=reviewsButton]').click();

    // Assuming there's a button to add a new review
    cy.get('[data-cy=addReviewButton]').click();

    // Fill out the review form
    const reviewText = 'This is a test review.';
    cy.get('[data-cy=reviewTextArea]').type(reviewText);
    cy.get('[data-cy=submitReviewButton]').click();

    // Assert that the review appears on the review screen
    cy.get('[data-cy=reviewList]').should('contain.text', reviewText);
  });

  // Optionally, you may add a test case to log out the user after the review posting
  it('should log out the user', () => {
    // Perform logout steps
    // Assert that the user is logged out
    cy.get('[data-cy=logoutSuccessMessage]').should('be.visible');
  });
});
