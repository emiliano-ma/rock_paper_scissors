
describe('player can interact with Game UI', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#play").click();
  });


  it('player sees the GAME page', () => {
    cy.get('#player-name').should('contain', 'Best of luck');
  });

  it('player have rock, paper and scissors to choose from', () => {
    cy.get('#Rock').should('exist');
    cy.get('#Paper').should('exist');
    cy.get('#Scissors').should('exist');
  });

  xit('player sees the chosen weapon', () => {
    cy.get('#players-choice').should('exist');
  });

  xit('player sees the computer choice of weapon', () => {
    cy.get('#computers-weapon').should('contain', ' is my choice');
  });

  xit('play again button displays once the round is over', () => {
    cy.get('#Rock').click();
    cy.get('#play-again').should('be.visible');
  });

});