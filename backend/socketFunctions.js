module.exports = function (socket, io, socketList) {

  console.log(`New User connected: ${socket.id}`);

  socket.on('disconnect', () => {
    socket.disconnect();
    console.log('User disconnected!');
  });

  socket.on('BE-check-user', ({
    roomId,
    userName
  }) => {
    let error = false;

    io.in(roomId).fetchSockets((err, clients) => {
      clients.forEach((client) => {
        if (socketList[client] == userName) {
          error = true;
        }
      });
      socket.emit('FE-error-user-exist', {
        error
      });
    });
  });

  /**
   * Join Room
   */
  socket.on('BE-join-room', ({
    roomId,
    userName
  }) => {
    // Socket Join RoomName
    socket.join(roomId);
    socketList[socket.id] = {
      userName,
      video: true,
      audio: true
    };
    console.log("reaching");

    // Set User List
    io.in(roomId).fetchSockets((err, clients) => {
      try {
        const users = [];
        clients.forEach((client) => {
          // Add User List
          users.push({
            userId: client,
            info: socketList[client]
          });
        });
        socket.broadcast.to(roomId).emit('FE-user-join', users);
        console.log("joined");
        // io.sockets.in(roomId).emit('FE-user-join', users);
      } catch (e) {
        io.sockets.in(roomId).emit('FE-error-user-exist', {
          err: true
        });

        console.log("BE-join-room error");
        console.log(e);
      }
    });
  });

  socket.on('BE-call-user', ({
    userToCall,
    from,
    signal
  }) => {
    io.to(userToCall).emit('FE-receive-call', {
      signal,
      from,
      info: socketList[socket.id],
    });
  });

  socket.on('BE-accept-call', ({
    signal,
    to
  }) => {
    io.to(to).emit('FE-call-accepted', {
      signal,
      answerId: socket.id,
    });
  });

  socket.on('BE-send-message', ({
    roomId,
    msg,
    sender
  }) => {
    console.log(msg);
    console.log("roomId");
    console.log(roomId);
    io.sockets.in(roomId).emit('FE-receive-message', {
      msg,
      sender
    });
  });

  socket.on('BE-leave-room', ({
    roomId,
    leaver
  }) => {
    delete socketList[socket.id];
    socket.broadcast
      .to(roomId)
      .emit('FE-user-leave', {
        userId: socket.id,
        userName: [socket.id]
      });
    socket.leave(roomId);
  });

  socket.on('BE-toggle-camera-audio', ({
    roomId,
    switchTarget
  }) => {
    if (switchTarget === 'video') {
      socketList[socket.id].video = !socketList[socket.id].video;
    } else {
      socketList[socket.id].audio = !socketList[socket.id].audio;
    }
    socket.broadcast
      .to(roomId)
      .emit('FE-toggle-camera', {
        userId: socket.id,
        switchTarget
      });
  });
}