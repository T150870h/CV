
class personal {
    constructor(input_1, input_2, ) {
        this.$container = document.createElement('div');

        this.$input_1 = document.createElement('p');
        this.$input_1.setAttribute('class', 'font-bold text-xl mt-4')
        this.$input_1.innerHTML = input_1;

        this.$input_2 = document.createElement('p');
        this.$input_2.setAttribute('class', 'text-sm')
        this.$input_2.innerHTML = input_2;

       
    }
    render() {
        this.$container.appendChild(this.$input_1);
        this.$container.appendChild(this.$input_2);
        return this.$container;
    }
}
export default personal;