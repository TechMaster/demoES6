//https://github.com/pauliusuza/node-v7-async-await-demo
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 500);
  });
}

async function add1(x) {
  let a = resolveAfter2Seconds(20);
  let b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

async function add2(x) {
  let a = await resolveAfter2Seconds(20);
  let b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});