import Main from "./CV/mainCV.js";
import Knlv from "./CV/Knlv.js";
import brg from "./CV/LL.js ";
class views {
    constructor() {
        

        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'flex ');
        this.$container_1 = document.createElement('div');
        this.$main = new Main();
        this.$knlv = new Knlv(); 
        this.$container_2 = document.createElement('div');   
        this.$container_2.setAttribute('class', 'mt-10')
        this.$brg = new brg();
    }
    render() {
        this.$container_1.appendChild(this.$main.render());
        this.$container_1.appendChild(this.$knlv.render());
        this.$container_2.appendChild(this.$brg.render());
        this.$container.appendChild(this.$container_1);
        this.$container.appendChild(this.$container_2);
      
        return this.$container;
    }
   
} 
const view = document.getElementById('cv');
view.setAttribute('class', 'w-9/12 ml-36 mt-24 mb-24');
const mainCv = new views();
view.appendChild(mainCv.render());