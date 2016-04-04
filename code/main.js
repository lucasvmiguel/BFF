import "babel-polyfill";

import * as configLib from './config/config';
import * as api from './api/server';

const environment = process.env.env || 'development';

let {config, error} = configLib.Read({path: `envs/${environment}.json`});
if(error){
  console.log(error);
  process.exit();
}

error = api.Start({port: config.port});
if(error){
  console.log(error);
  process.exit();
}
