
// ==================mobile Menu =======================

const hamburger=document.querySelector('.hamburger');
const close=document.querySelector('.close');
const mobile_nav=document.querySelector('.header__nav__mobile')

hamburger.addEventListener('click',()=>{
    hamburger.style.display='none';
    close.style.display='block'
    mobile_nav.style.transform='translateY(0%)';
    mobile_nav.style.top='67px';
    // mobile_nav.style.display='flex';
})


document.body.addEventListener('click',()=>{
    if(event.target!==hamburger){
        hamburger.style.display='block';
        close.style.display='none'
        mobile_nav.style.transform='translateY(-100%)';
        mobile_nav.style.top='0px';

    }

    // mobile_nav.style.display='none';

})
