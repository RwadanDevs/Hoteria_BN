import socketIO from 'socket.io';

let name;

export let io = socketIO(name)

export const startSocket = (server) => {
  io = socketIO(server);

  io.on('connection', socket => {
      console.log("User Connected");

      socket.on('disconnect', () => {
        io.emit('Client Disconnected',{ClientId: socket.id})
      })
  });
}
