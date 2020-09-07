import http from 'http';
import app from './app';
import socket from 'socket.io';
import { startSocket } from './helpers/socketConnection';

const port = process.env.PORT || 3030;

const server = http.Server(app);

server.listen(port,()=> console.log('running on port',port));

startSocket(server);