
describe('User can interact with the Welcome UI', () => {
  beforeEach(() => {
    cy.get('#input-name').type('Emiliano');
    cy.get("#play").click();
  })

  it('User can fill in a name and it gets displayed as players name in RenderGame', () => {
    cy.get('#player-name').should('contain', 'Emiliano');
  });

  it('Welcome page is not displayed after clicking on Play', () => {
    cy.get("#play").should("not.exist");
  });

  it('User can go back to Welcome page', () => {
    cy.get('#back').click();
    cy.get("#play").should("exist");
  });
}) 