describe('Registration Page', () => {
    it('should register a new user successfully', () => {
      cy.visit('/register'); // Adjust the URL based on your app's routing
  
      cy.get('input[placeholder="Username"]').type('testuser');
      cy.get('input[placeholder="Email"]').type('test@example.com');
      cy.get('input[placeholder="Password"]').type('password');
  
      cy.get('button').contains('Register').click();
  
      // Verify that the registration was successful
      cy.contains('Registration successful').should('be.visible');
    });
  });
  