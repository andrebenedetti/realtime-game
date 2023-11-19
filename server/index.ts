import { WebSocketServer } from "ws";
import { Runtime } from "./lib/application/runtime";

const wss = new WebSocketServer({ port: 8080 });

const runtime = new Runtime()

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  const messagesPerSecond = 60
  setInterval(() => {
    ws.send(runtime.serialize());
  }, 1000 / messagesPerSecond)
});
