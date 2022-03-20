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

        this.$text_1 = document.createElement('p');
        this.$text_1.setAttribute('class', 'ml-16 font-medium mt-8 ')
        this.$text_1.innerText = 'MINDX TECHNOLOGY SCHOOL | 07/2021 -  ĐẾN NAY'

        this.$wires_1 = document.createElement('p');
        this.$wires_1.setAttribute('class', 'ml-16 mt-2 ')
        this.$wires_1.innerText = `- Đạt chứng chỉ: Khoá 1: HTML  và  CSS
                                    - Đạt chứng chỉ: Khoá 2: JavaScript  
                                    - Đã tham gia và hoàn thành 2 đồ án:
                                    `
        this.$wires_2 = document.createElement('a');
        this.$wires_2.setAttribute('class', 'ml-32 mt-2')
        this.$wires_2.innerText = `- Coffee Shop`
        this.$wires_2.href = 'https://t150870h.github.io/coffee-new/'

        this.$wires_3 = document.createElement('a');
        this.$wires_3.setAttribute('class', 'ml-32 mt-2')
        this.$wires_3.innerText = `- Chat App`
        this.$wires_3.href = 'https://t150870h.github.io/chat-app/'
        
 
        this.$skills = new sample(
            './image/brightnes.png',
            'Kỹ năng'
        );

        this.$skills_1 = new Skills (
          `Kỹ năng làm việc nhóm: `,
           `- Lắng nghe và tiếp thu ý kiến từ đồng nghiệp, hướng đến mục tiêu chung để hoàn thành công việc nhóm`
        );

        this.$skill_2 = new Skills (
             `Kỹ năng giao tiếp`,
             `- Có khả năng thuyết trình, giao tiếp trôi chảy, lưu loát`
        )

        this.$skill_3 = new Skills (
            `Kỹ năng xử lý và giải quyết vấn đề`,
            `- Khả năng tập trung giải quyết vấn đề tốt
             - Giải quết nhanh gọn vẫn đề `
        );
        this.$skill_4 = new Skills (
            `Kỹ năng làm việc`,
           `- Dùng thư viên tailwindcss xây dựng trang web
            - Có khả năng làm việc với các framework của nhóm
            - Có khả năng làm việc với firebase`, 
        )
    }
    
    
 
    render() {
        this.$container_1.appendChild(this.$graduation.render());
        this.$container.appendChild(this.$container_1);
        this.$container.appendChild(this.$container_2);
        this.$container_2.appendChild(this.$text_1);
        this.$container_2.appendChild(this.$wires_1);
        this.$container_2.appendChild(this.$wires_2);
        this.$container_2.appendChild(this.$wires_3);
        this.$container_2.appendChild(this.$skills.render());
        this.$container_2.appendChild(this.$skills_1.render());
        this.$container_2.appendChild(this.$skill_2.render());
        this.$container_2.appendChild(this.$skill_3.render());
        this.$container_2.appendChild(this.$skill_4.render());
        
       
        return this.$container;
    }
}
export default graduation;