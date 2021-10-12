import './style.css';

const container = document.querySelector('.ul-dom');
const ref = document.querySelector('.ref-btn');

const display = () => {
  container.forEach((name, score) => {
    container.innerHTML = `<li>
      ${name}: ${score}
      </li>`;
  });
};

const refresh = () => {
  ref.addEventListener('click', () => {
    window.location.reload();
  });
};

refresh();
display();