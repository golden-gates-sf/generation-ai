import Typed from "typed.js";

const typedStrings = ['идете в ногу со временем', 'делегируете задачи', 'не боитесь быть автоматизированными'];
const pausedTypedStrings = typedStrings.map(str => '^1000 ' + str);

const typeOptions = {
    strings: pausedTypedStrings,
    typeSpeed: 90,
    backSpeed: 70,
    backDelay: 3000,
    loop: true,
    loopCount: Infinity
};

const typed = new Typed(".typed-text", typeOptions)

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav");
const menuBtnIcon = document.querySelector(".menu-btn-icon");
const header = document.querySelector("header");

console.log(menuBtnIcon.src.match('http://localhost:1234/menu-bold-icon-lb.svg'));
console.log(menuBtnIcon.src)

menuBtn.addEventListener("click", () => {
    if (navMenu.style.visibility !== "visible") {
        navMenu.style.visibility = "visible";
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.zIndex = "100";
        // menuBtnIcon.src = "./src/img/icons/menu_icons/close-cross.svg";
    } 
    else {
        navMenu.style.visibility = "hidden";
        header.style.position = "static";
        // menuBtnIcon.src = "/src/img/icons/menu_icons/menu-bold-icon-lb.svg";    
    }
})