import ToolsProject from "../../fixtures/tools.mjs";
//../fixtures/tools.mjs
//import ToolsProject from "../support/tools1";
//const number = new ToolsProject().randomnumber(); // gera um numero random
const emailrandom =  new ToolsProject().randomemail(); // chama a função que cria um email random
const senharandom =  new ToolsProject().randompswd(); // chama a função que cria uma senha random

import Login from '../../support/pages/login/index';
import Register from '../../support/pages/register/index';





Given(/^que o usuario esta na pagina de login$/, () => {
    Login.acessarlogin();
});




// When(/^o usuario ingreasar o email "([^"]*)"$/, (email) => {
//     Login.preencherlogin_input();
// 	//console.log(args1);
// 	//return true;
// });


When(/^o usuario ingreasar o email "([^"]*)" e o usuario ingressar a senha "([^"]*)"$/, (email,senha) => {
    Login.preencherlogin_input(email,senha);
	//console.log(args1,args2);
	//return true;
});



When(/^o usuario clicar no botao login$/, () => {
	Login.clicarbotonlogin();
});


Then(/^ele debe ser redirecionado pra pagina de my accout$/, () => {
	Login.validarloginacesso();
});
