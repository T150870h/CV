class workExperience {
    constructor(time, position, address, duty  ) {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'mt-8');

        this.$time = document.createElement('p');
        this.$time.setAttribute('class', 'font-medium font-light  ml-36 mt-8');
        this.$time.innerText = time;

        this.$position = document.createElement('p');
        this.$position.setAttribute('class', 'font-medium  ml-36 mt-2');
        this.$position.innerText = position;
         
        this.$address = document.createElement('p');
        this.$address.setAttribute('class', 'font-medium  ml-36 mt-2');
        this.$address.innerText = address;
 
        this.$duty = document.createElement('p');
        this.$duty.setAttribute('class', 'font-medium font-light  ml-36 mt-2');
        this.$duty.innerText = duty;

    }
    render() {
        this.$container.appendChild(this.$time);
        this.$container.appendChild(this.$position);
        this.$container.appendChild(this.$address);
        this.$container.appendChild(this.$duty);
        return this.$container;
    }
}
export default workExperience;