import fs from 'fs';

export async function Read({path: path}){
  try{
    const config = JSON.stringify(fs.readFile(path, {}));
    return {config: config, error: null};
  }catch(e){
    return {config: null, error: 'error to read config file'};
  }
}
