//Callback function
function testcallback(cb) {
  setTimeout(cb, 1200);
}

testcallback(()=>{
  console.log('Qua chuoi');
});

console.log('I will run first');


//Promise function
function testpromise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1200);
  })
};

testpromise().then(()=> {
  console.log('Run after promise return');
});

console.log('it should run before');
