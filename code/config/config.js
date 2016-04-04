import read from 'read-file';

export function Read({path: path}){
  try{
    const config = JSON.stringify(read.sync(path, 'utf8'));
    return {config: config, error: null};
  }catch(e){
    return {config: null, error: 'error to read config file'};
  }
}
