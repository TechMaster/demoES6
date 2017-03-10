/**
 * Created by techmaster on 12/30/16.
 */
let request = require('request-promise');

let options = {
  url: 'https://api.github.com/repos/scottwrobinson/camo',
  headers: {
    'User-Agent': 'techmaster'
  }
};

request.get(options).then(function(body) {
  let json = JSON.parse(body);
  console.log('Camo has', json.stargazers_count, 'stars!');
});