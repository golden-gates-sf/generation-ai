import Typed from "typed.js";

const typeOptions = {
    strings: ['идете в ногу со временем', 'делегируете задачи', 'не боитесь быть автоматизированными'],
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
    loopCount: Infinity
};

const typed = new Typed(".typed-text", typeOptions)

