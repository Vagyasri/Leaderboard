import './style.css';

const container = document.querySelector('.ul-dom');
// const ref = document.querySelector('.ref-btn');
const name = document.querySelector('.plus');
const score = document.querySelector('.score');
const form = document.querySelector('.form');

const list = [];

const display = () => {
  list.forEach((name, score) => {
    container.innerHTML = `<li>
      ${name}: ${score}
      </li>`;
  });
};

// const refresh = () => {
//   ref.addEventListener('click', () => {
//     window.location.reload();
//   });
// };

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const yourName = name.value;
  const yourScore = score.value;
  list.push(yourName, yourScore);
});

display();