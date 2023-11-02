const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    const sectBtn = document.querySelectorAll('.control'); // Replace this with your button selector

    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            const currentBtn = document.querySelector('.active-btn');

            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }

            this.classList.add('active-btn');
        });
    }
    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other btns
            sectBtn.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other secrtions
            sections.forEach((section) =>{
            section.classList.remove('active') 
            })
             const element = document.getElementById(id);
             element.classList.add('active');
        } 
            })
//toglle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode')
})
            
}

PageTransitions();
