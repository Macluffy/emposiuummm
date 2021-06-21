let buttonblanc = document.querySelectorAll("button")[0]
let buttonnoir = document.querySelectorAll("button")[1]
let header1 = document.querySelector("header")
let body = document.querySelector("body")
let a = document.querySelectorAll("a")
let h1 = document.querySelector("h1")
let couleurblanche = document.getElementsByClassName("whitecolor")
buttonnoir.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    header1.style.backgroundColor = "black"

    Array.from(a).forEach(element => {
        element.style.color = "white"
    });
    Array.from(couleurblanche).forEach(element => {
        element.style.color = "white"
    });


})
buttonblanc.addEventListener("click", () => {
    body.style.backgroundColor = "white"
    header1.style.backgroundColor = "white"

    Array.from(a).forEach(element => {
        element.style.color = "black"
    });
    Array.from(couleurblanche).forEach(element => {
        element.style.color = "black"
    });


})
let btnexit = document.querySelector(".exit2")
let btnconnexion1 = document.querySelector(".btnconnexion")
let inscription = document.querySelector(".btnincription")
let connexion2 = document.querySelector(".connexion2")
let tabblur = document.getElementsByClassName("blur")
let connexion = document.querySelector(".connexion")
let exit = document.querySelector(".exit")
let btnconnexion = document.querySelector(".lastli")

btnconnexion.addEventListener("click", (e) => {

    Array.from(tabblur).forEach(element => {
        element.style.filter = "blur(6px)"
    });
    e.preventDefault()
    connexion.style.display = "flex"
});
exit.addEventListener("click", () => {
    Array.from(tabblur).forEach(element => {
        element.style.filter = "blur(0)"
        connexion.style.display = "none"
    });
})
inscription.addEventListener("click", () => {


    connexion.style.display = "none"
    connexion2.style.display = "flex"

});
btnconnexion1.addEventListener("click", () => {


    connexion.style.display = "flex"
    connexion2.style.display = "none"

});
btnexit.addEventListener("click", () => {
    Array.from(tabblur).forEach(element => {
        element.style.filter = "blur(0)"
        connexion2.style.display = "none"
    });
})
let pascal = document.getElementsByClassName("pascal")
let image = document.getElementsByClassName(" image")

// Array.from(image).forEach(element => {
//     element.addEventListener("mouseover", () => {
//         element.style.width = "19rem"


//     })
//     element.addEventListener("mouseout", () => {
//         element.style.width = "18rem"
//         Array.from(pascal).forEach(element => {
//             element.style.height = "0rem"
//             if (element.style.height == "0rem") {
//                 element.style.zIndex = "2"
//             }

//         })
//     })

// });
let variable
body.addEventListener("mouseover", (e) => {
    if (e.target.className == "img1 image") {
        e.target.style.width = "19rem";
        e.target.nextElementSibling.style.width="19rem"
        e.target.nextElementSibling.style.display="flex"
        e.target.nextElementSibling.style.height="4rem"
        
        // element.style.display = "flex"
        // element.style.height = "4rem"
    }
})
document.body.addEventListener("mouseout", (e) => {
    if (e.target.className == "img1 image") {
        e.target.style.width = "18rem"
        e.target.nextElementSibling.style.width="18rem"
        
        e.target.nextElementSibling.style.height="0rem"
        e.target.nextElementSibling.style.display="flex"
        e.target.nextElementSibling.firstElementChild.firstElementChild.style.height="0"
        e.target.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.style.height="0"
        
    }
})
this.innerHTML = "transition event ended";
let navbar = document.getElementsByTagName("header")[0]
window.addEventListener("scroll", () =>{
    if(window.scrollY > 1){
        navbar.classList.add('scroll');
    }else {
        navbar.classList.remove('scroll')
    }
});
let btnc1 = document.querySelector("#btn1")
let btnc2 = document.querySelector("#btn2")
let btnc3 = document.querySelector("#btn3")
let btnc4 = document.querySelector("#btn4")
console.log(btnc4);
let carroussel = document.querySelector(".caroussel")
console.log(carroussel);

btnc1.addEventListener("click",()=>{
    console.log("popo");
carroussel.style.transform="translateX(0%)"
})
btnc2.addEventListener("click",()=>{
    console.log("popo");
carroussel.style.transform="translateX(-90%)"
})
btnc3.addEventListener("click",()=>{
    console.log("popo");
carroussel.style.transform="translateX(-135%)"
})
btnc4.addEventListener("click",()=>{
    console.log("popo");
carroussel.style.transform="translateX(-180%)"
})