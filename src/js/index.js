import Typed from "typed.js";
import crossIcon from "../img/icons/menu_icons/close-cross.svg";
import menuIcon from "../img/icons/menu_icons/menu-bold-icon-lb.svg";

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

const langBtn = document.querySelector(".languages-btn");
const langDropList = document.querySelector(".languages-droplist");

menuBtn.addEventListener("click", () => {
    if (navMenu.style.visibility !== "visible") {
        navMenu.style.visibility = "visible";
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.zIndex = "100";
        menuBtnIcon.src = crossIcon;
    } 
    else {
        navMenu.style.visibility = "hidden";
        header.style.position = "static";
        menuBtnIcon.src = menuIcon;    
    }
})

langBtn.addEventListener("click", () => {
    langDropList.style.visibility === "visible" ? langDropList.style.visibility = "hidden" : langDropList.style.visibility = "visible";  
});

