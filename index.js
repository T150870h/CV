import Main from "./CV/mainCV.js";
import Knlv from "./CV/Knlv.js";
import brg from "./CV/LL.js ";
class views {
    constructor() {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'container w-full');
        this.$main = new Main();
        this.$knlv = new Knlv();    
        this.$brg = new brg();
    }
    render() {
        this.$container.appendChild(this.$main.render());
        this.$container.appendChild(this.$knlv.render());
        this.$container.appendChild(this.$brg.render());
        return this.$container;
    }
   
} 
const view = document.getElementById('cv');
const mainCv = new views();
view.appendChild(mainCv.render());