describe("Player can interact with the Welcome UI", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#input-name").type("Emiliano");
    cy.get("#play").click();
  });

  it("Player can fill in a name and it gets displayed as players name in RenderGame", () => {
    cy.get("#player-name").should("contain", "Emiliano");
  });

  it("Welcome page is not displayed after clicking on Play", () => {
    cy.get("#play").should("not.exist");
  });

  it("Player can go back to Welcome page", () => {
    cy.get("#back").click();
    cy.get("#play").should("exist");
  });
});
