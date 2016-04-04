import newConnection from './controllers/new_connection';
import newMessage from './controllers/new_message';

export default function({socketServer: socketServer}){
  socketServer.on('connection', newConnection);
  socketServer.on('message', newMessage);
}
