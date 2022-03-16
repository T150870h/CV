
class Skills {
    constructor(skills_1, skills_2) {
         this.$container = document.createElement('div');

         this.$skills_1 = document.createElement('p');
            this.$skills_1.setAttribute('class', 'ml-16 mt-4 font-medium text-xl')
         this.$skills_1.innerText = skills_1;

         this.$skills_2 = document.createElement('p');
            this.$skills_2.setAttribute('class', 'ml-16')
         this.$skills_2.innerText = skills_2;
    }
    render() {
        this.$container.appendChild(this.$skills_1);
        this.$container.appendChild(this.$skills_2);
        return this.$container;
    }
}
export default Skills;