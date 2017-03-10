/**
 * http://thecodebarbarian.com/80-20-guide-to-async-await-in-node.js.html?utm_source=nodeweekly&utm_medium=email
 */
async function test(){
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1200));
  console.log('Done');
}
//test();
// Prints "Promise { <pending> }"
console.log(test());
console.log('I run first');