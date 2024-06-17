import Typed from "typed.js";

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
  const switchCheckbox = document.querySelector("#switch-checkbox");
  
  let switchMode = "Email";
  slider.innerText = "Telegram";
  slider.setAttribute("data-before", switchMode);
  switchCheckbox.checked = false;

    formOverlay.style.visibility = "visible";
    const closeFormBtn = document.getElementById("form-close-btn");
    closeFormBtn.addEventListener("click", () => {
      switchMode = 0;
        formOverlay.style.visibility = "hidden";
    });

    slider.addEventListener("click", (e) => {
      slider.setAttribute("data-before", switchMode);

      if (switchMode === "Email") {
        slider.style.justifyContent = "start";
        slider.innerText = "Email";
        formInputContainer.innerHTML = "";
        formInputContainer.insertAdjacentHTML("afterbegin", `
         <input
              type="text"
              name="Telegram Username"
              placeholder="Telegram @username"
              id="telegram-field"
              class="form-input"
          />
          `)
        switchMode = "Telegram";
        slider.setAttribute("data-before", switchMode);
      }
      else {
        slider.style.justifyContent = "end";
        slider.innerText = "Telegram";
        formInputContainer.innerHTML = "";
        formInputContainer.insertAdjacentHTML("afterbegin", `
          <input
              type="text"
              name="Username"
              placeholder="Your name"
              id="username-field"
              class="form-input"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              id="email-field"
              class="form-input"
            />
          `)
        switchMode = "Email";
        slider.setAttribute("data-before", switchMode);
      }
    })
//   if (formOverlay.style.visibility !== "visible")
//     formOverlay.classList.add("form--open");
//   else formOverlay.classList.remove("form--open");
});
