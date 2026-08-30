document.addEventListener('DOMContentLoaded',()=>{
    const acaLink = document.querySelector('a[href="#academics"]');
    const acasec = document.getElementById('academics');

    if(acaLink && acasec) {
        acaLink.addEventListener("click",(e)=>{
            e.preventDefault();
            acasec.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded',()=>{
    const aboLink = document.querySelector('a[href="#about"]');
    const abosec = document.getElementById('about');

    if(aboLink && abosec) {
        aboLink.addEventListener("click",(e)=>{
            e.preventDefault();
            abosec.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded',()=>{
    const conLink = document.querySelector('a[href="#contact"]');
    const consec = document.getElementById('contact');

    if(conLink && consec) {
        conLink.addEventListener("click",(e)=>{
            e.preventDefault();
            consec.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded',()=>{
    const skiLink = document.querySelector('a[href="#skills"]');
    const skisec = document.getElementById('skills');

    if(skiLink && skisec) {
        skiLink.addEventListener("click",(e)=>{
            e.preventDefault();
            skisec.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded',()=>{
    const homLink = document.querySelector('a[href="#home"]');
    const homsec = document.getElementById('home');

    if(homLink && homsec) {
        homLink.addEventListener("click",(e)=>{
            e.preventDefault();
            homsec.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });
    }
});


let submit = document.querySelector("#btn");
let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
});
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let user = document.getElementById("uname").value;
    let mail = document.getElementById("mail").value;
    let text = document.getElementById("msg").value;
    if(user=="" || mail=="" || text=="") {
        alert("fill all details first!");
    }
    else {
        alert("Your message is sent!");
       
    }
    console.log("click");
});


let navBtn = document.querySelector("button");
let anchor = document.querySelector(".anchor");
navBtn.addEventListener("click",()=>{
    console.log("clicked");
    anchor.classList.toggle("active");
});
