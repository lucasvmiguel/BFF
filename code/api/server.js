import socketServer from './websocket/server';

export function Start({port: port}){
  try{
    let error = socketServer.Start(port);
    if(error) return {error: 'error to start server #1'};
    return {error: null};
  }catch(e){
    return {error: 'cant start server #2'};
  }
}
