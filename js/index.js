// Event Listener I:
const navigation = document.querySelectorAll('.nav-link');

navigation.forEach((elements) => {
    elements.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'gold';
        event.target.style.transform = 'scale(1.5)';
    })
})

// Event Listener II: 
navigation.forEach((elements) => {
    elements.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black';
        event.target.style.transform = 'scale(1)';
    })
})

// Event Listener III: 
function scroll(){
const head = document.querySelector('.main-navigation');
const ypos = window.pageYOffset;
if(ypos > 500){
    head.style.height = '60px';
}
else {
    head.style.height = '90px';
    }
};

window.addEventListener('scroll', scroll);

// Event Listener IV:
const images = document.querySelectorAll('img');

images.forEach((elements) => {
    elements.addEventListener('mouseenter', (event) => {
        event.target.style.border = "solid 2px gold";
    })
})

// Event Listener V:
images.forEach((elements) => {
    elements.addEventListener('mouseleave', (event) => {
        event.target.style.border = '';
    })
})

// Event Listener VI: 
const buttons = document.querySelectorAll('.btn');

buttons.forEach((elements) => {
    elements.addEventListener('click', (event) => {
        prompt('Enter your email here');
    })
})

// Event Listener VII:
const heads = document.querySelectorAll('h4');

heads.forEach((elements) => {
    elements.addEventListener('mouseover', (event) => {
        event.target.style.color = 'gold';
    })
})

// Event Listener VIII:
heads.forEach((elements) => {
    elements.addEventListener('mouseout', (event) => {
        event.target.style.color = '';
    })
})

// Event Listener IX: 
const titles = document.querySelectorAll('h2');

titles.forEach((elements) => {
    elements.addEventListener('mouseover', (event) => {
        event.target.style.color = 'gold';
        event.target.style.transform = 'scale(1.2)';
    })
})

// Event Listener X: 
titles.forEach((elements) => {
    elements.addEventListener('mouseout', (event) => {
        event.target.style.color = '';
        event.target.style.transform = 'scale(1)';
    })
})