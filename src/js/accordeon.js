import { accorionData } from './data'

const colors = [
    'pink',
    'sky',
    'blue',
]

const accordeonRoot = document.getElementById('accordeon-root')
accorionData.forEach(({text, title}, i) => {
    accordeonRoot.insertAdjacentHTML('beforeend', `
        <div class="accordion ${colors[i % colors.length]}">
           <div class="accordion__titlecontainer">
              <p class="acc-title">${title}</p>
              <div class="accordion__icon"></div>
           </div>
           <div class="accordion__body">
              <p class="text">${text}</p>
           </div>
        </div>     
    `)
})

const elems = document.querySelectorAll('.accordion')

elems.forEach((el) => {
    el.addEventListener('click', () => {
        elems.forEach(elem => el != elem ? elem.classList.remove('active') : null)
        el.classList.toggle('active')
    })
})
