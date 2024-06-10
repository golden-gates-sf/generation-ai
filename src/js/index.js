import Typed from "typed.js";
import crossIcon from "../img/icons/menu_icons/close-cross.svg";
import menuIcon from "../img/icons/menu_icons/menu-bold-icon-lb.svg";

const typedStrings = [
  "идете в ногу со временем",
  "делегируете задачи",
  "не боитесь быть автоматизированными",
];
const pausedTypedStrings = typedStrings.map((str) => "^1000 " + str);

const typeOptions = {
  strings: pausedTypedStrings,
  typeSpeed: 90,
  backSpeed: 70,
  backDelay: 3000,
  loop: true,
  loopCount: Infinity,
};

const typed = new Typed(".typed-text", typeOptions);

const menuBtn = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("nav");
const header = document.querySelector("header");

const langBtn = document.querySelector(".languages-btn");
const langDropList = document.querySelector(".languages-droplist");

const formOverlay = document.querySelector(".form-overlay");
const registerBtn = document.querySelector(".register-btn");

menuBtn.addEventListener("click", () => {
  if (navMenu.style.visibility !== "visible") {
    navMenu.style.visibility = "visible";
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.zIndex = "100";
    menuBtn.classList.add("nav-open");
  } else {
    navMenu.style.visibility = "hidden";
    header.style.position = "static";
    menuBtn.classList.remove("nav-open");
  }
});

langBtn.addEventListener("click", () => {
  langDropList.style.visibility === "visible"
    ? (langDropList.style.visibility = "hidden")
    : (langDropList.style.visibility = "visible");
});

registerBtn.addEventListener("click", () => {
  const formInputContainer = document.getElementById("form-input-container");
  const slider = document.getElementById("slider");
  let switchMode = 0;

    formOverlay.style.visibility = "visible";

    const closeFormBtn = document.getElementById("form-close-btn");
    closeFormBtn.addEventListener("click", () => {
      switchMode = 0;
        formOverlay.style.visibility = "hidden";
        // formInputContainer.style.visibility = "hidden";
    });

    slider.addEventListener("click", (e) => {
      if (switchMode === 0) {
        // formInputContainer.style.visibility = "hidden";
        switchMode += 1;
        console.log(switchMode);
      }
      else {
        // formInputContainer.style.visibility = "visible";
        switchMode -= 1;
        console.log(switchMode)
      }
    })
//   if (formOverlay.style.visibility !== "visible")
//     formOverlay.classList.add("form--open");
//   else formOverlay.classList.remove("form--open");
});
