
class Main {
    constructor() {
       this.$container = document.createElement('div');
       this.$container.setAttribute('class', 'container');

       this.$image = document.createElement('img');  
       this.$image.setAttribute('class', 'rounded-full w-64 h-80 mt-24 ml-40' );      
       this.$image.src = 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg'

       this.$name = document.createElement('p');
       this.$name.setAttribute('class', 'font-medium text-2xl ml-36 mt-8')
       this.$name.innerText = 'NGUYỄN SỸ THÀNH HƯNG';
        
       
       
    }
    render() {
       this.$container.appendChild(this.$image);
       this.$container.appendChild(this.$name);
       return this.$container;
    }
}
const CvEl = document.getElementById('cv');
const main = new Main();
CvEl.appendChild(main.render());
  