import './assets/css/styles.scss'
// import './assets/css/styles.css'


import logo from './assets/img/logo.svg'


import atom from './assets/img/atom.png'
import code from './assets/img/code.png'
import house from './assets/img/house.jpg'
import star from  './assets/img/star-wars.png'
import marine from './assets/img/submarine.png'
import monster from './assets/img/monster.png'

const h = 180;
const logoimg = document.querySelector('#logo');
logoimg.src = logo;

const codeimg = document.querySelector('#code');
codeimg.src = code;
codeimg.height = h;

const atomimg = document.querySelector('#atom');
atomimg.src = atom;
atomimg.height = h;

const houseimg = document.querySelector('#house');
houseimg.src = house;
houseimg.height = h;

const marineimg = document.querySelector('#marine');
marineimg.src = marine;
marineimg.height = h;

const starimg = document.querySelector('#star');
starimg.src = star;
starimg.height = h;

const monsterimg = document.querySelector('#monster');
monsterimg.src = monster;
monsterimg.height = h;

