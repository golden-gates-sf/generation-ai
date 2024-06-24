import Typed from "typed.js";

// Typed Text

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
const langDiv = document.getElementById("languages-container");

const formOverlay = document.querySelector(".form-overlay");
const registerBtn = document.querySelector(".register-btn");

// NavBar

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

// Languages List

langBtn.addEventListener("click", (event) => {
  if (langDropList.style.visibility !== "visible") {
    langDropList.style.visibility = "visible";
    event.stopPropagation();

    window.onclick = (e) => {
      if (e.target == langDropList || langDropList.contains(e.target)) {
        return
      }
      langDropList.style.visibility = "hidden";
      window.onclick = null
    }

    langDropList.focus();
  }

  // if (langDropList.style.visibility === "hidden") {
  //   langDropList.style.visibility = "visible";
  //   langDropList.focus();
  // }

  // langDropList.style.visibility === "visible"
  //   ? (langDropList.style.visibility = "hidden")
  //   : (langDropList.style.visibility = "visible");
});

// Register Form

registerBtn.addEventListener("click", () => {
  const formInputContainer = document.getElementById("form-input-container");
  const slider = document.getElementById("slider");
  const switchCheckbox = document.querySelector("#switch-checkbox");

  let switchMode = "Email";
  slider.innerText = "Telegram";
  slider.classList.add("email-icon");
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
      slider.classList.remove("email-icon");
      slider.classList.add("telegram-icon");
      formInputContainer.innerHTML = "";
      formInputContainer.insertAdjacentHTML(
        "afterbegin",
        `
         <input
              type="text"
              name="Telegram Username"
              placeholder="Telegram @username"
              id="telegram-field"
              class="form-input"
          />
          `
      );
      switchMode = "Telegram";
      slider.setAttribute("data-before", switchMode);
    } else {
      slider.style.justifyContent = "end";
      slider.innerText = "Telegram";
      slider.classList.add("email-icon");
      slider.classList.add("telegram-icon");
      formInputContainer.innerHTML = "";
      formInputContainer.insertAdjacentHTML(
        "afterbegin",
        `
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
          `
      );
      switchMode = "Email";
      slider.setAttribute("data-before", switchMode);
    }
  });
  //   if (formOverlay.style.visibility !== "visible")
  //     formOverlay.classList.add("form--open");
  //   else formOverlay.classList.remove("form--open");
});

// Benefits Cards Generation

import benefitImg0 from "../img/benefits_section/benefits_0.webp";
import benefitImg1 from "../img/benefits_section/benefits_1.webp";
import benefitImg2 from "../img/benefits_section/benefits_2.webp";
import benefitImg3 from "../img/benefits_section/benefits_3.webp";
import benefitImg4 from "../img/benefits_section/benefits_4.webp";
import benefitImg5 from "../img/benefits_section/benefits_5.webp";

const benefitsCards = [
  {
    h1: "Job Security",
    text1:
      "Secure your future by mastering AI skills, safeguarding your position amidst rising automation",
    h2: "Financial Stability",
    text2:
      "Improve your financial outlook with AI skills that open higher-paying job opportunities",
    btnText: "Register to know how",
    img: {
      src: benefitImg0,
      alt: "Happy Work Man",
    },
  },
  {
    h1: "Industry Relevance",
    text1:
      "Stay relevant in your industry by acquiring essential AI knowledge that employers demand",
    h2: "Future-proof skills",
    text2:
      "Equip yourself with future-proof skills that ensure longevity in evolving job markets",
    btnText: "Become an expert",
    img: {
      src: benefitImg1,
      alt: "AI Engineering",
    },
  },
  {
    h1: "Anxiety Reduction",
    text1:
      "Reduce employment stress by being prepared for AI-driven job markets",
    h2: "Economic Resilience",
    text2:
      "Build economic resilience by staying employable amidst technological disruption",
    btnText: "Join us to learn more",
    img: {
      src: benefitImg2,
      alt: "Happy Working People",
    },
  },
  {
    h1: "Hands-on Experience",
    text1:
      "Gain practical experience through projects and case studies aligned with industry needs",
    h2: "Community Support",
    text2:
      "Join a supportive community of learners and professionals dedicated to AI excellence",
    btnText: `I am ready, let's go`,
    img: {
      src: benefitImg3,
      alt: "Developers Community",
    },
  },
  {
    h1: "Market Trends Insights",
    text1:
      "Leverage our research to understand and capitalize on upcoming AI job opportunities",
    h2: "Resource Access",
    text2:
      "Access comprehensive AI resources and tools to enhance your learning experience",
    btnText: "Get access now",
    img: {
      src: benefitImg4,
      alt: "Observation",
    },
  },
  {
    h1: "Employment Assistance",
    text1:
      "Get personalized support to land lucrative positions requiring AI expertise",
    h2: "Project Opportunities",
    text2:
      "Get matched with exciting AI projects that allow you to apply your newfound skills",
    btnText: `Sounds good, I'm in`,
    img: {
      src: benefitImg5,
      alt: "Employment Assistance",
    },
  },
];

const benefitsLongContainer = document.getElementById(
  "benefits-long-container"
);

benefitsCards.forEach((el, i) => {
  i % 2 === 0
    ? benefitsLongContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="benefit-card">
            <div class="benefit-card__text-box">
              <h3>${el.h1}</h3>
              <span>${el.text1}</span>
              <h3>${el.h2}</h3>
              <span>${el.text2}</span>
              <button>${el.btnText}</button>
            </div>
            <img src="${el.img.src}" alt="${el.img.alt}">
          </div>`
      )
    : benefitsLongContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="benefit-card">
            <img src="${el.img.src}" alt="${el.img.alt}">
            <div class="benefit-card__text-box">
              <h3>${el.h1}</h3>
              <span>${el.text1}</span>
              <h3>${el.h2}</h3>
              <span>${el.text2}</span>
              <button>${el.btnText}</button>
            </div>
          </div>`
      );
});
