class icon {
    constructor (image, image_2, image_3, image_4, image_5, image_6) {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'bg-blue-400 rounded-lg shadow-lg p-2 ')

        this.$image = document.createElement('img');
        this.$image.setAttribute('class', 'pt-4 ')
        this.$image.src = image;

        this.$image_2 = document.createElement('img');
        this.$image_2.setAttribute('class', 'pt-8')
        this.$image_2.src = image_2;

        this.$image_3 = document.createElement('img');
        this.$image_3.setAttribute('class', 'pt-8')
        this.$image_3.src = image_3;

        this.$image_4 = document.createElement('img');
        this.$image_4.setAttribute('class', 'pt-8')
        this.$image_4.src = image_4;

        this.$image_5 = document.createElement('img');
        this.$image_5.setAttribute('class', 'pt-8')
        this.$image_5.src = image_5;

        this.$image_6 = document.createElement('img');
        this.$image_6.setAttribute('class', 'pt-8 mb-4')
        this.$image_6.src = image_6;

    }
    render() {
        this.$container.appendChild(this.$image);
        this.$container.appendChild(this.$image_2);
        this.$container.appendChild(this.$image_3);
        this.$container.appendChild(this.$image_4);
        this.$container.appendChild(this.$image_5);
        this.$container.appendChild(this.$image_6);
      
        return this.$container;
    }
}
export default icon;