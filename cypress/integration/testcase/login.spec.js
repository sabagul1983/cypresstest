before('read data from fixture',()=>{
    cy.visit('/');
    cy.fixture('login').as('data')

})
describe('nopcommerce',()=>{

it('lonin',()=>{
    cy.get("@data").then((data)=>{
        cy.login(data.email,data.password);
    
    })
})

})