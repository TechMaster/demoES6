function* createLogger(){
  console.log('Start')
  yield
  console.log('End')
  yield

}


const logger = createLogger();
logger.next()
//logger.next()
