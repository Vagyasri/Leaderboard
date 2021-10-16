const gameId = 'DscO6JAo5NZxttquRyk1';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const scoresUrl = `${baseUrl}${gameId}/scores/`;
const container = document.querySelector('.ul-dom');

const getData = async () => {
  const response = await fetch(scoresUrl);
  const data = await response.json();
  return data;
};

const display = (data) => {
  container.innerHTML = '';
  [...new Set(data)].sort((a, b) => b.score - a.score)
    .forEach((score) => {
      const listContent = document.createElement('li');
      listContent.classList = 'list-content';
      listContent.innerText = `${score.user}: ${score.score}`;
      container.appendChild(listContent);
    });
};

export { getData, scoresUrl, display };