describe("template spec", () => {
  beforeEach("testing conection", () => {
    cy.visit("");
  });
  it("Finde element", () => {
    cy.get("div#app");
  });
  it("Submit form and calc", () => {
    cy.get("input#num1").type("4");
    cy.get("input#num2").type("6");
    cy.get("select#operator").select("divi");
  });

  it("Test input values", () => {
    cy.get("button").click();
  });
});
