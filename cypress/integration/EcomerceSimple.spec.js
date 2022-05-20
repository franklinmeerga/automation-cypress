/// <reference types="cypress" />

//import _ from 'lodash';

import ToolsProject from "../fixtures/tools.mjs";
//import ToolsProject from "../support/tools1";
const number = new ToolsProject().randomnumber(); // gera um numero random
const emailrandom =  new ToolsProject().randomemail(); // chama a função que cria um email random
const senharandom =  new ToolsProject().randompswd(); // chama a função que cria uma senha random

import Login from '../support/pages/login/index';


describe('fazer cadastro login', () => {
    // comando para visitar o site
    it ('visitar o site', () =>{
        cy.visit('http://automationpractice.com/index.php')
    
    })
    
    it ('criar uma conta', () => {
        // clicamos no botgão de login
        cy.get('.login').click();
        //cy.get('#email_create').type(`franklinmeerga${number}@ufps.edu.co`);
        cy.get('#email_create').type(emailrandom);
        
        // vamos escutar o post 200 que ele faz depois que ele clica no butão
        
        // routing
        // star do server com cy.server() mas no cypress 6.0 é cy.intercept()
        // criar uma rota com cy.route()
        // atribuir uma rota a um alias (as()) e fazer uma validação
        // esperar com cy.wait()

        cy.intercept('**/index.php').as('postemail');


        cy.get('#SubmitCreate > span').click();
       
        //cy.wait('@postemail').its('response.statusCode').should('eq', 200); // isso aqui funciona
        
        cy.wait('@postemail').should((res) => {
            expect(res.response.statusCode).to.equal(200);
            //expect(res.response).has.property('token'); é bom fazer rolar isso aqui
            expect(res.response.body.id).is.not.null;
        })
        //cy.get('@postemail').then(console.log); // isso aqui é muito interesante para ver o log

       

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

       
        cy.get('#submitAccount > span').click();

    })
})

describe('LOGIN', () => {
    // fazer login com email valido
    it.only ('Login with e-mail and password validate', () => {

        Login.acessarlogin();
        Login.preencherlogin();
        Login.clicarbotonlogin();
        Login.validarloginacesso(); // posso validar com o status, outro jeito
    })
})

describe('MY ACCOUNT', () => {
    // editar o adrees do perfil que foi criado
    it ('edit an address', () => {
        // faço login de novo pois ele sai da page assim que acabar e volta pra login de novo
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=addresses');
        cy.get('#email').type('franklinmeerga@ufps4.edu.co');
        cy.get('#passwd').type('12345');
        cy.get('#SubmitLogin > span').click();

        // agora faço a edição do endereço
        cy.get('.myaccount-link-list > :nth-child(3) > a > span').click();
        cy.get('[href="http://automationpractice.com/index.php?controller=address&id_address=692812"] > span').click({ force: true }); //click({ multiple: true });
        cy.get('#address1').clear().type('AddressValidate');
        cy.get('#submitAddress > span').click();
        //cy.get('.address_address1').contains('AddressValidate'); 
        cy.get('.address_address1').invoke('text').then((s) => {
            expect(s).to.string('AddressValidate');
            expect(s).to.not.string('Address1');
        })
        

    })
    // editar  os dados pessoais - Genero F
    it ('Edit personal data F', () => {

    })
    // editar os pessiais - Genero-M
    it ('edit personal data -M', () => {

    })
})