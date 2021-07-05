/// <reference types="Cypress" />


describe("Verify user able to enter location and search via Hilton brand page", () => {
    it("Should be able to search a successful location for property", () => {
        //Cypress Code   
        cy.visit("https://www.hilton.com/en/");
        cy.contains('Locations').click();
       var ele = cy.get('#search-form-query');
        for (let i =1; i<=Math.floor((Math.random() *50) + 15); i++){
           var c=  ele.wait(1000).tab();
        }
        c.click(); 
    
        
    });

    it.only("Should be able to search a succesful location for property using mobile", () => {
        cy.viewport('iphone-x');
        cy.visit("https://www.hilton.com/en/");
        cy.contains('Locations').click();
        cy.get('#location-tab-Asia').click(); 
        cy.findAllByText("India").click();
    
    });
    
    
    it("Should be able to search a succesful location for property using mobile", () => {
        cy.viewport('iphone-x');
        cy.visit("https://www.hilton.com/en/");
        cy.contains('Locations').click();
        cy.get('#search-form-query').wait(1000).tab().tab().click();
    
    });
    
    
    })