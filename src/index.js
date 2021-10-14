import { } from 'lodash';
import './style.css';

const container = document.querySelector('.ul-dom');
const ref = document.querySelector('.ref-btn');
const name = document.querySelector('.plus').value;
const score = document.querySelector('.score').value;
const form = document.querySelector('.form');

const list = [];

container.innerHTML = '<li></li>';

ref.addEventListener('click', () => {
  window.location.reload();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const yourName = name;
  const yourScore = score;
  list.push(yourName, yourScore);
});
