// Computer behaves as first person and treats user in the second person

describe('player can interact with the interface', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#play").click();
    cy.get("#rock-weapon").click();
  });

  it('player sees the chosen weapon', () => {
    cy.get('#players-weapon').should('contain', 'Rock is your choice');
  });

  it('player sees the computer choice of weapon', () => {
    cy.get('#computers-weapon').should('contain', ' is my choice');
  });

  it('round result is displayed', () => {
    cy.get('#round-result').should('contain', 'win');
  });

  it('play again button displays once the round is over', () => {
    cy.get('#play-again').should('be.visible');
  });
});