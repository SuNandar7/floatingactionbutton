// UI
const floatbtn = document.querySelector('.floatbtn');
const recenticon = document.querySelector('.floatbtn-container');
const fabackicon = document.querySelector('.fa-chevron-left');
const fashare = document.querySelector('.fa-share');
console.log(fashare);
const shareicon = document.querySelector('.shareicon-container');
const emailicon = document.querySelector('.fa-envelope-open');
const formcontainer = document.querySelector('.formcontainer');
const arrowicon = document.querySelector('.fa-arrow-left');

floatbtn.addEventListener('click',()=>{
    // console.log('click');
    recenticon.classList.toggle('show');
})

fabackicon.addEventListener('click',()=>{
    // console.log('click');
    recenticon.classList.remove('show');
    floatbtn.style.position = "absolute";
    floatbtn.style.top = "-350px";
    floatbtn.style.right = "10px";
});

fashare.addEventListener('click',()=>{
    console.log('click');
    shareicon.classList.toggle('active');
});

emailicon.addEventListener('click',()=>{
    shareicon.classList.remove('active');
    formcontainer.classList.add('show');
});

arrowicon.addEventListener('click',()=>{
    formcontainer.classList.remove('show');
})


