import socketIO from 'socket.io';

let name;

export let io = socketIO(name)

export const startSocket = (server) => {
  io = socketIO(server);

  const ActiveUsers = [];

  io.on('connection', socket => {
      socket.emit('ping',socket.id)

      socket.on('auth',data=>{
        let foundUser = false
        for(const user of ActiveUsers){
          if(user.authInfo === data.authInfo)
            foundUser = true;
        }
        if(!foundUser)
        ActiveUsers.push(data);
      console.log(foundUser,data);
      })

      socket.on('disconnect', () => {
        console.log("User Disconnected");
        io.emit('Client Disconnected',{ClientId: socket.id})
      })
  });
}
