import {HomePage} from './home.js';
import {Portfolio} from './portfolio.js'

document.addEventListener('DOMContentLoaded', () => {
  HomePage();
});

const body = document.querySelector('.body');
const homepage = document.querySelector('.homebtn')
const portfolio = document.querySelector('.portfoliobtn')

homepage.addEventListener('click', ()=>{
  body.innerHTML = ""
  HomePage();
});

portfolio.addEventListener('click', ()=>{
  body.innerHTML = ""
  Portfolio()
});

body.addEventListener('click', function(event) {
  if (event.target.classList.contains('seemore')) {
    body.innerHTML = ""
    Portfolio()
  }
});