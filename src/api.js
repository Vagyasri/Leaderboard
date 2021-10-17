const gameId = 'iB3YUBEKlAX4c2HDZAhu';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const scoresUrl = `${baseUrl}${gameId}/scores/`;
const container = document.querySelector('.ul-dom');

const getData = async () => {
  const response = await fetch(scoresUrl);
  const data = await response.json();
  return data;
};

const stopRepeat = (arr) => {
  const uniqueNames = [...new Set(arr.map((obj) => obj.user))];
  const newArr = uniqueNames.map((name) => {
    const newObj = {
      user: name,
      score: Math.max(...arr.filter((u) => u.user === name)
        .map((u) => u.score)),
    };
    return newObj;
  });
  return newArr;
};

const display = (data) => {
  container.innerHTML = '';
  stopRepeat(data).sort((a, b) => b.score - a.score)
    .forEach((score) => {
      const listContent = document.createElement('li');
      listContent.classList = 'list-content';
      listContent.innerText = `${score.user}: ${score.score}`;
      container.appendChild(listContent);
    });
};

export { getData, scoresUrl, display };