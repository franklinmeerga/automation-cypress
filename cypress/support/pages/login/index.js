// acções de interação com a pagina

// acesar o login
//preencher login

// e com essas ações vamos interagir com dois elementos,
// os de id e os de buton login


const elemento = require('./elements').ELEMENTS;
const data = require('./elements').DATA;

class Login {

    acessarlogin() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=addresses');
    }

    preencherlogin() {
        cy.get(elemento.email).type(data.email_user);
        cy.get(elemento.password).type(data.psswd_user);
    }

    clicarbotonlogin() {
        cy.get(elemento.botonlogin).click();
    }

    validarloginacesso() {
        cy.get(elemento.account).invoke('text').then((info) => {
            expect(info).to.string(elemento.text_validate);

        }) 
    }
}

export default new Login();
