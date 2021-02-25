before('read data from fixture',()=>{
    cy.fixture('register1').as('data')

})
describe('nopcommerce',()=>{

it('regiser new user',()=>{
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('.ico-register').click();
    cy.get("@data").then((data)=>{
    cy.get('#FirstName').type(data.firstName);
    cy.get('#LastName').type(data.lastName);
    cy.get('#Email').type(data.email);
    cy.get('#Password').type(data.password);
    cy.get('#ConfirmPassword').type(data.password);
    cy.xpath('//select[@name="DateOfBirthDay"]').select('2').contains('2');
    cy.xpath('//select[@name="DateOfBirthMonth"]').select('February').contains('February');
    cy.xpath('//select[@name="DateOfBirthYear"]').select('1911').should('have.value','1911');
    })
})

})