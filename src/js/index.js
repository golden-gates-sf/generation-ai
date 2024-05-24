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

