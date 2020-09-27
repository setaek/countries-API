const CountriesData = {
  url: {
    all: 'https://restcountries.eu/rest/v2/all',
    name: 'https://restcountries.eu/rest/v2/name/',
  },
  init: function () {},
  getData: async function (url) {
    // get countries Data API using XMLHttpRequest
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.addEventListener('readystatechange', (e) => {
        if (req.status === 200 && req.readyState === 4) {
          resolve(req.responseText);
        } else if (req.status === 400) {
          reject('cant get Data', new Error());
        }
      });
      req.send();
    });
    // get countries Data API using Fetch API

    // let data = await fetch(url);
    // return data.json();
  },
};