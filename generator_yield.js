function* sendMessageFromYield(){
  yield 'First'
}

const hello = sendMessageFromYield()
console.log(hello.next())
console.log(hello.next())


function* receiveMessageToYield(){
  const word = yield
  console.log(word)
}

const hi = receiveMessageToYield()
hi.next('Rock')
hi.next('Metal')
