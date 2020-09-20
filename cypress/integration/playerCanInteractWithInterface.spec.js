// Computer behaves as first person and treats user in the second person

describe('player can interact with the interface', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#play").click();
    // cy.get("#rock-weapon").click();
  });


  it('player sees the THE GAME page', () => {
    cy.get('#the-game').should('contain', 'THE GAME');
  });



  xit('player sees the chosen weapon', () => {
    cy.get('#players-weapon').should('contain', 'Rock is your choice');
  });

  xit('player sees the computer choice of weapon', () => {
    cy.get('#computers-weapon').should('contain', ' is my choice');
  });

  xit('round result is displayed', () => {
    cy.get('#round-result').should('contain', 'win');
  });

  xit('play again button displays once the round is over', () => {
    cy.get('#play-again').should('be.visible');
  });

  xit('typed player name displays as player name', () => {
    cy.get('#input-name').type('Rose');
    cy.get('#input-name').should('contain', 'Rose');
  });
});