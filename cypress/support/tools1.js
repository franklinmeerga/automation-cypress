//const { random } = require("cypress/types/lodash")
//import _ from 'lodash';
//import _ from "c:/Users/cavas/Downloads/Automation Cypress/node_modules/@types/lodash";
//import has from 'lodash/has';



// PARA RODAR ESSE ARQUIVO AQUI É PRECISO POR A EXTENSÃO .MJS NO LUGAR DA JS E PRONTO, É SÓ IMPORT ELA NO ARQUIVO QUE SE QUER

class ToolsProject {
// está clase é criada para incluir alguns metodos que serão usados como ferramentas

    randomnumber() {
        return Math.floor((Math.random() * 100) + 1);
    }

    randomemail() {
        return `franklin${this.randomnumber}@gmail.com`
    }

    
}

//const name = new ToolsProject();
//const a = new ToolsProject().randomemail()
//const b = new ToolsProject().randomnumber()

//console.log(b);

export default ToolsProject;