const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});


type WorldObject = {
  type: "player"
  x: number
  y: number
  username: string
}

socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
  // we'll improve how this is done and how the code is structured:
  const separator = ";";
  window.world = event.data.split(",").map((wo: string) => {
    // assumes we only have player objects
    const [type, x, y, username] = wo.split(separator);
    return {
      type,
      x,
      y,
      username,
    };
  });
});
