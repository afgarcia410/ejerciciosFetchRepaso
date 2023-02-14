//Hacer node.\index.js para funcionar

fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (data.setup) {
      console.log(data.setup);
      console.log(data.punchline);
      const parte1 =`<li>${data.setup}</li>`;
      const parte2 =`<li>${data.punchline}</li>`;

      document.querySelector('ul').insertAdjacentHTML('beforeend',parte1);
      document.querySelector('ul').insertAdjacentHTML('beforeend',parte2);
    } else {
      console.log(data.joke);
    }
  })
  .catch(error => {
    console.error(error);
  });
