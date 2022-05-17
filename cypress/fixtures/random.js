//const { random } = require("cypress/types/lodash")
import _ from 'lodash';
//import has from 'lodash/has';


class ToolsProject {
// está clase é criada para incluir alguns metodos que serão usados como ferramentas

    randomnumber() {
        return Math.floor((Math.random() * 100) + 1);
    }

    
}

//const name = new ToolsProject();
//const a = new ToolsProject().randomnumber()

//console.log(`franklinmeerga${a}@ufps.edu.co`);

export default ToolsProject;