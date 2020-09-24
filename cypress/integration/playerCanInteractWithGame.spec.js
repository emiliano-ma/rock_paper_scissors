describe('player can interact with Game UI', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('#input-name').type('Emiliano');
    cy.get("#play").click();
  });

  it('player sees the GAME page', () => {
    cy.get('#player-name').should('contain', 'Best of luck Emiliano');
  });

  it('player have rock, paper and scissors to choose from', () => {
    cy.get('#Rock').should('exist');
    cy.get('#Paper').should('exist');
    cy.get('#Scissors').should('exist');
  });
});