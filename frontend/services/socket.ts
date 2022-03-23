import io from "socket.io-client";

const sockets = io(process.env.NEXT_STATIC_MAIN_API_URL, {
  autoConnect: true,
  forceNew: true,
  // path: "/api/socket.io",
  timeout: 2000,
});

// sockets.connect();
// console.log("after connect");
// console.log(sockets);
export default sockets;