# Running the server

`
bun start
`

# Debugging on Chrome

Run the following code on the dev tools console.
Make sure to pass the correct port to the WebSocketServer

`
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};
`