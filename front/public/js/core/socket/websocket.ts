import { deserializeEvent } from "../../../../../shared/runtime";
import { toast } from "../../ui/toast";
import { handleEvent } from "./handlers";

export function setupWebsocket() {
  const socket = new WebSocket("ws://localhost:8080");

  socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
  });

  socket.addEventListener("error", (event) => {
    toast(
      "There was an error connecting to our servers. If the problem persists, contact our support."
    );
  });

  socket.addEventListener("message", (e) => {
    try {
      handleEvent(deserializeEvent(e.data))
    } catch (e) {
      console.log("error upon receiving event", e);
    }
  });
}
