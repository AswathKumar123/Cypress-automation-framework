/// <reference types="Cypress" />


describe("Verify user able to enter location and search via Hilton brand page", () => {
    it("Should be able to search a successful location for property", () => {
        //Cypress Code
        
        cy.visit("https://www.hilton.com/en/");
        cy.document().should('have.prop', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'Hotels by Hilton - Book the Best Rates Across All Brands');
        cy.url().should('include', 'hilton');
        cy.get('#search-form-query').type('Dallas').wait(1000).type('{downarrow}{downarrow}{enter}');
        cy.get('[data-testid="search-cta-btn"]').click();
    });
    
    it("Should be not able to search a successful location for property for an invalid location", () => {
        //Cypress Code
        cy.visit("https://www.hilton.com/en/");
        cy.get('#search-form-query').type('$@@').clear();
        cy.get('[data-testid="search-cta-btn"]').click();
    })
    
    it("Should be able to search a suuccesful location for property using mobile", () => {
        cy.viewport('iphone-x');
        cy.visit("https://www.hilton.com/en/");
       // cy.get('[class="btn btn-primary btn-lg w-full"]').click();
       cy.contains('Find a Hotel').click(); 
       cy.get('#search-form-query').type('Dallas').wait(1000).type('{downarrow}{downarrow}{enter}');
        cy.get('[data-testid="search-cta-btn"]').click();
    
    })
    
    
    })