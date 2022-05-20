// minhas ações da criação do meu novo usuario no site
/// <reference types="cypress" />
//import ToolsProject from "../fixtures/tools.mjs";
import ToolsProject from '../../../fixtures/tools.mjs'
//import ToolsProject from "../support/tools1";

const emailrandom =  new ToolsProject().randomemail(); // chama a função que cria um email random
const senharandom =  new ToolsProject().randompswd(); // chama a função que cria uma senha random



class Register {

    // visitar site
    visitarsite(){
        cy.visit('http://automationpractice.com/index.php');
    }

    // criar uma nova conta
    botaologinin () {
        // clicamos no botgão de login
        cy.get('.login').click();
    }

    emailregister () {
        //cy.get('#email_create').type(`franklinmeerga${number}@ufps.edu.co`);
        cy.get('#email_create').type(emailrandom);
    }

    intercept_status_subimitemail () {
        cy.intercept('**/index.php').as('postemail');
    }
    
    clicarbotao_subimitemail () {
        cy.get('#SubmitCreate > span').click();
    }

    validate_intercept_subimitemail () {
        cy.wait('@postemail').should((res) => {
            expect(res.response.statusCode).to.equal(200);
            //expect(res.response).has.property('token'); é bom fazer rolar isso aqui
            expect(res.response.body.id).is.not.null;
        })
    }

    new_data_register () {
        cy.get('#customer_firstname').type('franklin')
        cy.get('#customer_lastname').type('acevedo');
        cy.get('#passwd').type(senharandom);
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

       
        
    }

    click_botao_new_data_register () {
        cy.get('#submitAccount > span').click();
    }
}

export default new Register();
