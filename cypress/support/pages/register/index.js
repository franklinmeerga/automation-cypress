// minhas ações da criação do meu novo usuario no site
/// <reference types="cypress" />
//import ToolsProject from "../fixtures/tools.mjs";
import ToolsProject from '../../../fixtures/tools.mjs'
//import ToolsProject from "../support/tools1";

const emailrandom =  new ToolsProject().randomemail(); // chama a função que cria um email random
const senharandom =  new ToolsProject().randompswd(); // chama a função que cria uma senha random

const site = require('./elements').SITE;
const new_account = require('./elements').NEW_ACCOUNT;
const data_register = require('./elements').DATA_REGISTER;

class Register {

    // visitar site
    visitarsite(){
        cy.visit(site.url_site);
    }

    // criar uma nova conta
    botaologinin () {
        // clicamos no botgão de login
        cy.get(new_account.login_in).click();
    }

    emailregister () {
        //cy.get('#email_create').type(`franklinmeerga${number}@ufps.edu.co`);
        cy.get(new_account.email).type(emailrandom);
    }

    intercept_status_subimitemail () {
        cy.intercept('**/index.php').as('postemail');
    }

    clicarbotao_subimitemail () {
        cy.get(new_account.subimit).click();
    }

    validate_intercept_subimitemail () {
        cy.wait('@postemail').should((res) => {
            expect(res.response.statusCode).to.equal(200);
            //expect(res.response).has.property('token'); é bom fazer rolar isso aqui
            expect(res.response.body.id).is.not.null;
        })
    }

    new_data_register () {
        cy.get(data_register.customer_firstname).type(data_register.customer_firstname_data);
        cy.get(data_register.lastname).type(data_register.lastname_data);
        cy.get(data_register.passwd).type(senharandom);
        cy.get(data_register.days).select(data_register.days_data);
        cy.get(data_register.months).select(data_register.months_data);
        cy.get(data_register.years).select(data_register.years_data);
        

        cy.get(data_register.firstname).type(data_register.firstname_data);
        cy.get(data_register.lastname).type(data_register.lastname_data);
        cy.get(data_register.address1).type(data_register.address1_data);
        cy.get(data_register.address2).type(data_register.address2_data);
        cy.get(data_register.city).type(data_register.city_data);
        cy.get(data_register.id_state).select(data_register.id_state_data);
        cy.get(data_register.postcode).type(data_register.postcode_data);
        cy.get(data_register.id_country).select(data_register.id_country_data);
        cy.get(data_register.other).type(data_register.other_data);
        cy.get(data_register.phone).type(data_register.phone_data);
        cy.get(data_register.phone_mobile).type(data_register.phone_mobile_data);
        cy.get(data_register.alias).type(data_register.alias_data);

       
        
    }

    click_botao_new_data_register () {
        cy.get('#submitAccount > span').click();
    }
}

export default new Register();
