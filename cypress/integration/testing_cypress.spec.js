describe("Nosso hello ao cypress!", () => {
    //beforeEach(() => cy.visit ("https://example.cypress.io"));
    it("Navegando pelo site de teste do cypress", () =>{
        cy.visit ("https://example.cypress.io");
        //cy.get("css=.search-global-typeahead__input").type("cypress");
    });
});