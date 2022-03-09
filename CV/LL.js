
class bgr {
    constructor() {
        this.$container = document.createElement('div');

        this.$image = document.createElement('img');
        this.$image.src = './image/calendar.png';
         
        this.$image_2 = document.createElement('img');
      
    }
    render() {
        this.$container.appendChild(this.$image);
        return this.$container;
    }
}

export default bgr;