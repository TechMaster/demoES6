let request = require('request-promise');

let headers = {
  'User-Agent': 'techmaster'
};

let repos = [
  'scottwrobinson/camo',
  'facebook/react',
  'scottwrobinson/twentyjs',
  'moment/moment',
  'nodejs/node',
  'lodash/lodash'
];

let issueTitles = [];

let reqs = Promise.resolve();

repos.forEach(function(r) {
  let options = { url: 'https://api.github.com/repos/' + r, headers: headers };

  reqs = reqs.then(function() {
    return request.get(options);
  }).then(function(body) {
    let json = JSON.parse(body);

    let p = Promise.resolve();

    // Only make request if it has open issues
    if (json.has_issues) {
      let issuesOptions = { url: 'https://api.github.com/repos/' + r + '/issues', headers: headers };
      p = request.get(issuesOptions).then(function(ibody) {
        let issuesJson = JSON.parse(ibody);

        if (issuesJson[0]) {
          issueTitles.push(issuesJson[0].title);
        }
      });
    }

    return p;
  });
});

reqs.then(function() {
  console.log('Issue titles:');
  issueTitles.forEach(function(t) {
    console.log(t);
  });
});
