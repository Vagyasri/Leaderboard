import { } from 'lodash';
import './style.css';
import { getData, scoresUrl, display } from './api';

const name = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.ref-btn');
const form = document.forms['form-dom'];

const reload = () => {
  window.location.reload();
};

const add = (e) => {
  e.preventDefault();
  fetch(scoresUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: name.value,
      score: Number(score.value),
    }),
  })
    .then((response) => response.json())
    .then(async () => {
      const allScores = await getData();
      name.value = '';
      score.value = '';
      display(allScores.result);
    });
};

form.addEventListener('submit', add);
refresh.addEventListener('click', reload);

(async () => {
  const initialScores = await getData();
  display(initialScores.result);
})();
