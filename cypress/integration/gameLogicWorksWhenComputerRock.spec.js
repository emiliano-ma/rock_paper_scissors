describe("Game logic works when computer choices Rock", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (window) => {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
    cy.get("#input-name").type("Emiliano");
    cy.get("#play").click();
  });

  context("player choices Rock", () => {
    beforeEach(() => {
      cy.get("#Rock").click();
    });
    it("displays correct player choice", () => {
      cy.get("#player-choice").should("contain", "choise is: Rock");
    });

    it("displays correct computer choice", () => {
      cy.get("#computer-choice").should("contain", "choise is: Rock");
    });

    it("outcome is: it is a tie", () => {
      cy.get("#outcome").should("contain", "It is a tie");
    });

    it("the score is", () => {
      cy.get("#playerScore").should("contain", "0");
      cy.get("#computerScore").should("contain", "0");
    });
  });

  context("player choices Paper", () => {
    beforeEach(() => {
      cy.get("#Paper").click();
    });
    it("displays correct player choice", () => {
      cy.get("#player-choice").should("contain", "choise is: Paper");
    });

    it("displays correct computer choice", () => {
      cy.get("#computer-choice").should("contain", "choise is: Rock");
    });

    it("outcome is: Emiliano wins", () => {
      cy.get("#outcome").should("contain", "Emiliano wins");
    });

    it("the score is", () => {
      cy.get("#playerScore").should("contain", "1");
      cy.get("#computerScore").should("contain", "0");
    });
  });

  context("player choices Scissors", () => {
    beforeEach(() => {
      cy.get("#Scissors").click();
    });
    it("displays correct player choice", () => {
      cy.get("#player-choice").should("contain", "choise is: Scissors");
    });

    it("displays correct computer choice", () => {
      cy.get("#computer-choice").should("contain", "choise is: Rock");
    });

    it("outcome is: Computer wins", () => {
      cy.get("#outcome").should("contain", "Computer wins");
    });

    it("the score is", () => {
      cy.get("#playerScore").should("contain", "0");
      cy.get("#computerScore").should("contain", "1");
    });
  });
});
