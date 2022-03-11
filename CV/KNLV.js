import workExperience from "../newModel/workExperience.js";
class Knlv {
    constructor() {
        this.$container = document.createElement('div');
        this.$worrk = document.createElement('p');
        this.$worrk.setAttribute('class', 'font-medium text-2xl ml-36 mt-8 text-blue-500');
        this.$worrk.innerText = 'kinh nghiệm làm việc';

        this.$time_1 = new workExperience(
            '7/2019 -  12/2019',
            'Quản lý máy, thiết bị, tham gia sửa chữa, bảo trì máy',
            'Nhân viên quản lý, sửa chữa cybergame',
            `- Tham gia sửa chữa bảo trình máy
             - Quản lý thời gian khách hàng`
        ); 

        this.$time_2 = new workExperience( 
            '03/2020  -  11/2021',
            'Nhân viên quán lý doanh thu',
            'Cửa hàng gia dụng Minity',
            `- Lập báo cáo sản lượng bán ra
             - Lập báo cáo tổng kết doanh thu`
         );

         this.$time_3 = new workExperience(
             '12/2020  -  6/2021',
             'nhân viên tư vấn, bán hàng, thu ngân',
             'Cửa hàng tiện lợi circle K',
             `- Tiếp cận công việc quảng bá sản phẩm qua phương tiện truyền thông
              - Trực tiếp, giới thiệu sản phẩm cho khách hàng tư vấn khách hàng 
             `
         )
         this.$time_4 = new workExperience(
            '6/2021  -  đến nay',
            'nhân viên tư vân, bán hàng, thu ngân',
            'Cửa hàng tiện lợi Vinmart+',
            `- Tham gia truyền thông cửa hàng
            -  Trực tiếp, giới thiệu sản phẩm cho khách hàng tư vấn khách hàng
            -  Thu ngân`
         );
    }
    render() {
        this.$container.appendChild(this.$worrk);
        this.$container.appendChild(this.$time_1.render());
        this.$container.appendChild(this.$time_2.render());
        this.$container.appendChild(this.$time_3.render());
        this.$container.appendChild(this.$time_4.render());
        return this.$container;
    }
}
export default Knlv;