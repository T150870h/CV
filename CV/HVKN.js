import sample from '../newModel/sample.js'
import Skills from '../newModel/skillss.js'
class graduation {
    constructor() {
        this.$container = document.createElement('div');
        this.$container_1 = document.createElement('div');
        this.$container_2 = document.createElement('div');
        this.$container_2.setAttribute('class', 'mt-4 w-11/12  ');
         
        this.$graduation = new sample(
            './image/graduation.png',
            'Học vấn'
        );

        this.$text = document.createElement('p');
        this.$text.setAttribute('class', ' ml-16 font-medium ')
        this.$text.innerText = 'TRƯỜNG TRUNG HỌC DÂN LẬP PHỔ THÔNG TRÍ ĐỨC | 08/2016  -  08/2021'

        this.$wires = document.createElement('p');
        this.$wires.setAttribute('class', 'ml-16 mt-2')
        this.$wires.innerText = '- 2 năm hoc sinh khá, 1 năm học sinh giỏi'

        this.$text_1 = document.createElement('p');
        this.$text_1.setAttribute('class', 'ml-16 font-medium mt-8 ')
        this.$text_1.innerText = 'MINDX TECHNOLOGY SCHOOL | 07/2021 -  ĐẾN NAY'

        this.$wires_1 = document.createElement('p');
        this.$wires_1.setAttribute('class', 'ml-16 mt-2 ')
        this.$wires_1.innerText = `- Đạt chứng chỉ: Khoá 1: HTML  và  CSS
                                    - Đạt chứng chỉ: Khoá 2: JavaScript  
                                    - Đã tham gia và hoàn thành 2 đồ án:
                                    `
        this.$wires_2 = document.createElement('p');
        this.$wires_2.setAttribute('class', 'ml-16 mt-2  ')
        this.$wires_2.href = ''

        this.$skills = new sample(
            './image/brightnes.png',
            'Kỹ năng'
        );

        this.$skills_1 = new  Skills (
            `tin học:`,
            `- có khả năng cài win máy tính, có kiến thức về
            máy tính` 
        );
        this.$skills_2 = new Skills (
            `bán hàng:`,
            `- Có khả năng giao tiếp tốt, lưu loát, có khả
            năng thuyết phục khách hàng, khả năng
            thuyết phục khách hàng nhiều độ tuổi
            `
        );
       

    }
    render() {
        this.$container_1.appendChild(this.$graduation.render());
        this.$container.appendChild(this.$container_1);
        this.$container.appendChild(this.$container_2);
        this.$container_2.appendChild(this.$text);
        this.$container_2.appendChild(this.$wires);
        this.$container_2.appendChild(this.$text_1);
        this.$container_2.appendChild(this.$wires_1);
        this.$container_2.appendChild(this.$skills.render());
        this.$container_2.appendChild(this.$skills_1.render());
        this.$container_2.appendChild(this.$skills_2.render());
        
       
        return this.$container;
    }
}
export default graduation;