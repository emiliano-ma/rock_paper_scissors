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
  
  it('player choices rock', () => {
    cy.get('#rock-').click()
    cy.get('#players-choice').should('contain', 'Rock')
  })
})