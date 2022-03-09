
class bgr {
    constructor() {
        this.$container = document.createElement('div');

        this.$image = document.createElement('img');
        this.$image.src = './image/calendar.png';
    }
    render() {
        this.$container.appendChild(this.$image);
        return this.$container;
    }
}

export default bgr;