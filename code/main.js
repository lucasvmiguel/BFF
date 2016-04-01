import * as config from './config/config';

function async main(){
  const configObj = await config.Read(__dirname + '/development.json');
  console.log(`${__dirname}/development.json`);
  console.log(configObj);
}

main();
