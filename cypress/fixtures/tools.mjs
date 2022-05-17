//const { random } = require("cypress/types/lodash")
//import _ from 'lodash';
//import has from 'lodash/has';


class ToolsProject {
// está clase é criada para incluir alguns metodos que serão usados como ferramentas

    randomnumber() {
        return Math.floor((Math.random() * 100) + 1);
    }

    randomemail() {
        return `franklin${this.randomnumber()}@gmail.com`;
    }

    randompswd() {
        return Math.random().toString(36).slice(-10);
    }

    
}

//const name = new ToolsProject();
const a = new ToolsProject().randomemail()
//const b = new ToolsProject().randomnumber()
const b = new ToolsProject().randompswd();

console.log(b);

export default ToolsProject;