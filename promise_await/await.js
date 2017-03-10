/**
 * Created by techmaster on 12/30/16.
 */
//https://github.com/omidfi/async-await-examples

let request = require('request-promise');


async function getCamoJson() {
  let options = {
    url: 'https://api.github.com/repos/scottwrobinson/camo',
    headers: {
      'User-Agent': 'TechMaster'
    }
  };
  let body = await request.get(options);
  console.log(body);
}

getCamoJson();