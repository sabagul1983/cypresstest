describe("Testing of application", () =>{
    before('nevigate to url', () =>{
        cy.visit("https://demo.nopcommerce.com/");
    })
    it('registration functionality',() => {
       cy.get('.ico-register').click();
        //verifying the title of the page
        cy.title().should('include','nopCommerce demo store. Register');
        //clicking on radio button
        cy.get('#gender-female').check();
        //verifying if radio button is clicked or not
        cy.get('#gender-female').check().should('be.checked');
        cy.get('#FirstName').type('saba');
        cy.get('#LastName').type('gul');
        cy.get('#Email').type('sabagul123@gmail.com');
        cy.get('#Password').type('saba123');
        cy.get('#ConfirmPassword').type('saba123');
        cy.xpath('//select[@name="DateOfBirthDay"]').select('2').contains('2');
        cy.xpath('//select[@name="DateOfBirthMonth"]').select('February').contains('February');
        cy.xpath('//select[@name="DateOfBirthYear"]').select('1911').should('have.value','1911');
        cy.get('#register-button').click();
        cy.get('.result').invoke('text').as('confirm');
        cy.get('@confirm').should('include','Your registration completed');
        cy.get('.ico-logout').click();
    })

    it.skip("Login functionality", () =>{
        cy.get('.ico-login').click();
        cy.get('#Email').type('sabagul123@gmail.com');
        cy.get('#Password').type('saba123');
        cy.get('input[value="Log in"]').click();
        cy.title().should('include','nopCommerce demo store');
    })
    
})
