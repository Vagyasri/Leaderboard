import './style.css';

const container = document.querySelector('.ul-dom');

const display = () => {
  container.forEach((name, score) => {
    container.innerHTML = `<li>
      ${name}: ${score}
      </li>`;
  });
};

display();