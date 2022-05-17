/// <reference types="cypress" />

//import _ from 'lodash';
import ToolsProject from "../fixtures/tools.mjs";
//import ToolsProject from "../support/tools1";
const number = new ToolsProject().randomnumber();



describe('fazer uma compra de um produto x', () => {
    // comando para visitar o site
    it ('visitar o site', () =>{
        cy.visit('http://automationpractice.com/index.php')
    
    })
    
    it ('criar uma conta', () => {
        // clicamos no botgão de login
        cy.get('.login').click();
        cy.get('#email_create').type(`franklinmeerga${number}@ufps.edu.co`);
        
        // vamos escutar o post 200 que ele faz depois que ele clica no butão
        
        // routing
        // star do server com cy.server() mas no cypress 6.0 é cy.intercept()
        // criar uma rota com cy.route()
        // atribuir uma rota a um alias (as()) e fazer uma validação
        // esperar com cy.wait()

        cy.intercept('**/index.php').as('postemail');


        cy.get('#SubmitCreate > span').click();
       
        // cy.wait('@postemail').then((interception) => {

        // })
        cy.wait('@postemail').its('response.statusCode').should('eq', 200);

       

        cy.get('#customer_firstname').type('franklin')
        cy.get('#customer_lastname').type('acevedo');
        cy.get('#passwd').type('12345');
        cy.get('#days').select('5');
        cy.get('#months').select('3');
        cy.get('#years').select('1992');
        

        cy.get('#firstname').type('franklin');
        cy.get('#lastname').type("acevedo");
        cy.get('#address1').type('teste');
        cy.get('#address2').type('address');
        cy.get('#city').type('são paulo');
        cy.get('#id_state').select('Alabama');
        cy.get('#postcode').type('12345');
        cy.get('#id_country').select('United States');
        cy.get('#other').type('12345');
        cy.get('#phone').type('1234567890');
        cy.get('#phone_mobile').type('1234567801');
        cy.get('#alias').type('teste');

       
        cy.get('#submitAccount > span').click();

    })
})