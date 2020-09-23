describe('Game logic works when computer choices Rock', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (object) => {
        cy.stub(object.Math, 'floor').returns(0);
      }
    })
    cy.get('#input-name').type('Emiliano');
    cy.get("#play").click();
  })
  
  context ('player choices rock', () => {
    beforeEach(() => {
      cy.get('#rock-').click()
    })
    it('displays correct player choice', () => {
      cy.get('#player-choice').should('contain', 'choise is: rock')
    })

    it('displays correct computer choice', () => {
      cy.get('#computer-choice').should('contain', 'choise is: rock')
    })

    it('outcome is: it is a tie', () => {
      cy.get('#outcome').should('contain', 'It is a tie')
    })

    it('the score is', () => {
      cy.get('#playerScore').should('contain', '0')
      cy.get('#computerScore').should('contain', '0')
    })
  })
  
})