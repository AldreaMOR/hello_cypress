describe("Nosso hello ao cypress!", () => {
    //beforeEach(() => cy.visit ("https://example.cypress.io"));
    it("Navegando pelo site de teste do cypress", () =>{
        cy.visit ("https://example.cypress.io")
        //cy.get("css=.search-global-typeahead__input").type("cypress");
    })

    it ("Teste após inspeção via navegação do aplicativo do cypress", () =>{
        cy.get('.home-list > :nth-child(2) > :nth-child(1)')
    })

    it("Encontrando algo de conteúdo na página", () => {
        cy.contains('type')
    })
    
    it('Clique no link "type"', () => {
        //cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
      })
    
    it('Trabalhando com ações com get, types e asserts', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
    
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
      })
})