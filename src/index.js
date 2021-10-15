import { } from 'lodash';
import './style.css';

const container = document.querySelector('.ul-dom');
const name = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.ref-btn');
const submit = document.querySelector('.smt-btn');

refresh.addEventListener('click', () => {
  window.location.reload();
});

const add = (e) => {
  e.preventDefault();
  const listContent = document.createElement('li');
  listContent.classList = 'list-content';
  listContent.innerText = `${name.value}: ${score.value}`;
  container.appendChild(listContent);
};

submit.addEventListener('click', add);
