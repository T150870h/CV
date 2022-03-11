class Main {
    constructor() {
       this.$container = document.createElement('div');
       this.$container.setAttribute('class', 'container');
 
       this.$image = document.createElement('img');
       this.$image.setAttribute('class', 'rounded-full  w-64 h-80 mt-24 ml-40 ');
       this.$image.src = './image/meo.jpg';
 
       this.$name = document.createElement('p');
       this.$name.setAttribute('class', 'font-medium text-2xl ml-36 mt-8 text-blue-500')
       this.$name.innerText = 'NGUYỄN SỸ THÀNH HƯNG';
 
       this.$spanName = document.createElement('p');
       this.$spanName.setAttribute('class', 'font-medium text-xl ml-36 mt-4');
       this.$spanName.innerText = 'Full Stack Developer';
 
       this.$bantick = document.createElement('img');
       this.$bantick.setAttribute('class', 'ml-36 mt-8');
       this.$bantick.src = './image/bantick.png';
 
       this.$introduce = document.createElement('p');
       this.$introduce.setAttribute('class', 'w-2/5 ml-36 mt-2');
       this.$introduce.innerText = `Áp dụng kiến thức học và kinh nghiệm về kỹ năng lập trình đang 
                                    và đã học để hoàn thành tốt các dự án, tập trung và học hỏi để nâng 
                                    cao trình độ bản thân để từ đó giúp các dự án của bản thân được 
                                    hoàn thiện tốt hơn.`
    }
    render() {
       this.$container.appendChild(this.$image);
       this.$container.appendChild(this.$name);
       this.$container.appendChild(this.$spanName);
       this.$container.appendChild(this.$bantick);
       this.$container.appendChild(this.$introduce);
       return this.$container;
    }
 }
 export default Main;
//  const CvEl = document.getElementById('cv');
//  const main = new Main();
//  CvEl.appendChild(main.render());
 