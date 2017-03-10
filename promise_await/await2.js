/**
 * Created by techmaster on 12/30/16.
 */
let request = require('request-promise');

let headers = {
  'User-Agent': 'TechMaster',
  'token': '71823da22d323296513c67dabb068f182ebccf59'
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

async function main() {
  for (let i = 0; i < repos.length; i++) {
    let options = { url: 'https://api.github.com/repos/' + repos[i], headers: headers };
    let body = await request.get(options);
    let json = JSON.parse(body);

    if (json.has_issues) {
      let issuesOptions = { url: 'https://api.github.com/repos/' + repos[i] + '/issues', headers: headers };
      let ibody = await request.get(issuesOptions);
      let issuesJson = JSON.parse(ibody);

      if (issuesJson[0]) {
        issueTitles.push(issuesJson[0].title);
      }
    }
  }

  console.log('Issue titles:');
  issueTitles.forEach(function(t) {
    console.log(t);
  });
}

main();