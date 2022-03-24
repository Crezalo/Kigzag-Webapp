import io from "socket.io-client";

export const socket = io(process.env.NEXT_STATIC_MAIN_API_URL, {
  autoConnect: true,
  forceNew: true,
  // path: "/api/socket.io",
  timeout: 2000,
});

// export const socket_ls = io(process.env.NEXT_STATIC_lIVE_STREAM_CHAT_API_URL, {
//   autoConnect: true,
//   forceNew: true,
//   // path: "/api/socket.io",
//   timeout: 2000,
// });

// console.log(socket_ls);

// sockets.connect();
// console.log("after connect");
// console.log(sockets);
