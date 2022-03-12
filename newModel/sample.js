
class sample {
    constructor(image, text) {
        this.$container = document.createElement('div');

        this.$container_1 = document.createElement('div');
        this.$container_1.setAttribute('class', 'pt-12 flex ')
        this.$container_2 = document.createElement('div');

        this.$graduation = document.createElement('img');
        this.$graduation.setAttribute('class', 'bg-blue-400 rounded-full p-2 ')
        this.$graduation.src = image;

        this.$Education = document.createElement('p');
        this.$Education.setAttribute('class', 'text-xl font-bold text-gray-800 ml-4 pt-2')
        this.$Education.innerHTML = text;


    }
    render() {
        this.$container.appendChild(this.$container_1);
        this.$container_1.appendChild(this.$graduation);
        this.$container_1.appendChild(this.$Education);

        return this.$container;
    }
}
export default sample;