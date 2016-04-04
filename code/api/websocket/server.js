import express from 'express';
import http from 'http';
import io from 'socket.io';
import routes from './routes';

export async function Start({port: port}){
  try{
    let app = express();
    let server = http.Server(app);
    let socketServer = io(server);

    server.listen(port);
    routes(socketServer);
    
    return {error: null};
  }catch(e){
    return {error: 'cant start socket server!'};
  }
}
