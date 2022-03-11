import personal from '../newModel/noPersonal.js'
import icon from '../newModel/icon.js'
class brg {
    constructor() {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'flex')
       
       
        this.$image_1 = new icon(
            './image/calendar.png',
             './image/phone.png',
             './image/mail.png',
             './image/crop.png',
             './image/home.png',
                './image/user.png',
             );

        this.$container_1 = document.createElement('div');
        this.$container_1.setAttribute('class', 'flex flex-col ml-10')
        
        this.$input_1 = new personal(
            'Ngày sinh',
            '15/11/2001'
        );
        this.$input_2 = new personal(
            'Điện thoại',
            '086.549.1511',
        );
        this.$input_3 = new personal(
            ' Email',
            'nsthanhhung15112001@gmail.com'
        );
        this.$input_4 = new personal(
            'Facebook',
            'https://www.facebook.com/thanhhung.nguyensy.9/'
        );
        this.$input_5 = new personal(
            'Địa chỉ',
            `số 81, ngõ 158 Nguyễn Khánh Toàn, Quan Hoa,
            Cầu Giay, Hà Nội
            `
        );
        this.$input_6 = new personal(
            'Giới tính',
            'Nam'
        );
    }
    render() {
        this.$container.appendChild(this.$image_1.render());
        this.$container.appendChild(this.$container_1);
        this.$container_1.appendChild(this.$input_1.render());
        this.$container_1.appendChild(this.$input_2.render());
        this.$container_1.appendChild(this.$input_3.render());
        this.$container_1.appendChild(this.$input_4.render());
        this.$container_1.appendChild(this.$input_5.render());
        this.$container_1.appendChild(this.$input_6.render());
        return this.$container;
    }
}
export default brg;