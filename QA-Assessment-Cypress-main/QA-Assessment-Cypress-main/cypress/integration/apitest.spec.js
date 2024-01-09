
// Import necessary modules or classes if needed
import { CustomerBuilder } from 'C:\Users\Thiru.Sakthivel\juice-shop\cypress\integration';

describe('API Test: Juice Shop', () => {
  let customer;

  // Before block for setup
  before(() => {
    // Create a customer object with login credentials
    const loginEmail = 'sakthivel.thirunavukarasu95@gmail.com';
    const loginPassword = 'Welcome@2023';
    customer = new CustomerBuilder()
      .setEmail(loginEmail)
      .setPassword(loginPassword)
      .build();
  });

  it('should log in and get authentication token', () => {
    // Make a request to log in and get the authentication token
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/rest/user/login',
      body: {
        email: customer.getEmail(),
        password: customer.getPassword(),
      },
    }).then((response) => {
      // Assert the response status and capture the authentication token
      expect(response.status).to.equal(200);
      const authToken = response.body.authentication.token;
      
      // Store the authentication token in the customer object
      customer.setAuthToken(authToken);
    });
  });

  it('should post a review via the API', () => {
    // Make a request to post a review
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/Feedbacks',
      body: {
        comment: 'This is a test review.',
        rating: 5, // Provide the desired rating
      },
      headers: {
        Authorization: `Bearer ${customer.getAuthToken()}`, // Attach the authentication token
      },
    }).then((response) => {
      // Assert the response status and check if the review was posted successfully
      expect(response.status).to.equal(200);
      expect(response.body.success).to.equal(true);
    });
  });
});
