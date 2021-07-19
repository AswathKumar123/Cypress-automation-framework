/// <reference types="Cypress" />


describe("Verify user able to enter location and search via Hilton brand page", () => {
    var assert = chai.assert;
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
    

    it("Should be able to search a succesful location for property using mobile", () => {
        cy.viewport('iphone-x');
        cy.visit("https://www.hilton.com/en/");
        cy.get('[label="Locations"]').click();
        //cy.get('#location-tab-Asia').click(); 
        cy.xpath('//button[contains(@id,"location-tab-Asia")]').click(); 
        cy.findAllByText("India").click();
        var proptitle = cy.get('[class="font-headline text-xl"]');
        proptitle.should('contain', 'Hotels in India');
        proptitle.should('have.lengthOf.at.least', 1);
        var updatebtn = cy.get('[type="submit"]');
        updatebtn.should('be.visible')
        updatebtn.should('be.enabled')
        cy.get('#search-form-query').should('have.value', 'India, IN')
        cy.get('#search-form-query').should('have.attr', 'name', 'query')
    });
    
    
    it("Should be able to search a succesful location for property using mobile", () => {
        cy.viewport('iphone-x');
        cy.visit("https://www.hilton.com/en/");
        cy.contains('Locations').click();
        cy.get('#search-form-query').wait(1000).tab().tab().click();
    
    });

    it.only("Should be able to click a random widget location from category page using mobile", () => {
        cy.viewport('iphone-x');
        cy.visit("https://www.hilton.com/en/");
        cy.contains('Locations').click();
        cy.wait(2000);
        let i=Math.floor((Math.random() *7) +0);
        cy.get('.text-sm').find('.relative').eq(i).click();
        
    });
    
    })