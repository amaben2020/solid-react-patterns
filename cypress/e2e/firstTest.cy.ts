describe("display texts", () => {
  it("passes", () => {
    cy.visit("http://localhost:5174/");

    cy.get("[data-testid=vite-link]").should("exist");
    cy.get("h1").should("have.text", "Solid Design Patterns");
  });
});

describe("loops", () => {
  it("should display looped items", () => {
    cy.visit("http://localhost:5174");
    cy.get("[data-loop=loop-id-1]").should("exist");
  });
});
