import { } from 'lodash';
import './style.css';

const container = document.querySelector('.ul-dom');
const name = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.ref-btn');
const submit = document.querySelector('.smt-btn');

const add = (e) => {
  e.preventDefault();
  if (name.value == null || name.value === '' || score.value == null || score.value === '') return;
  const listContent = document.createElement('li');
  listContent.classList = 'list-content';
  listContent.innerText = `${name.value}: ${score.value}`;
  container.appendChild(listContent);
  name.value = '';
  score.value = '';
};

refresh.addEventListener('click', () => {
  window.location.reload();
});

submit.addEventListener('click', add);
