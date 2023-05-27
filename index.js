const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

dice1.setAttribute('src', `./images/dice${randomNumber1}.png`);
dice2.setAttribute('src', `./images/dice${randomNumber2}.png`);

randomNumber1 > randomNumber2 ? (h1.innerHTML = '🚩 Player 1 Wins! ') : (h1.innerHTML = 'Player 2 Wins! 🚩');
randomNumber1 === randomNumber2 ? (h1.innerHTML = 'Draw!') : false;
