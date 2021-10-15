import { } from 'lodash';
import './style.css';

const container = document.querySelector('.ul-dom');
const name = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.ref-btn');
const submit = document.querySelector('.smt-btn');

const reload = () => {
  window.location.reload();
};

const add = (e) => {
  e.preventDefault();
  if (name.value == null || name.value === '' || score.value == null || score.value === '') return;
  localStorage.setItem(name.value, score.value);
  const listContent = document.createElement('li');
  listContent.classList = 'list-content';
  listContent.innerText = `${name.value}: ${score.value}`;
  container.appendChild(listContent);
  reload();
  name.value = '';
  score.value = '';
};

submit.addEventListener('click', add);
refresh.addEventListener('click', reload);

// localStorage.setItem(name.value, score.value);
// console.log(localStorage.getItem(name.value));