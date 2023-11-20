import { storeWorldState } from "./state";

export function setupWebsocket() {
  const socket = new WebSocket("ws://localhost:8080");

  socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
  });

  socket.addEventListener("message", (event) => {
    const separator = ";";
    const state = event.data.split(",").map((wo: string) => {
      // assumes we only have player objects
      const [type, x, y, username] = wo.split(separator);
      return {
        type,
        x,
        y,
        username,
      };
    });

    storeWorldState(state)
  });
}