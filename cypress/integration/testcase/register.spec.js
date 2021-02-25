before('read data from fixture',()=>{
    cy.visit('/');
    cy.fixture('register1').as('data')

})
describe('nopcommerce',()=>{

it('regiser new user',()=>{
    cy.get("@data").then((data)=>{
        cy.register(data.firstName,data.lastName,data.email,data.password);
    
    })
})

})