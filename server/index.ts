import { WebSocketServer } from "ws";
import { Runtime } from "./lib/application/runtime";
import { getPort, server } from "./dev-server";

const wss = new WebSocketServer({ port: 8080 });

const runtime = new Runtime()

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  const messagesPerSecond = 60
  const sampleRate = 100
  let counter = 0;
  setInterval(() => {
    if (counter === 0) {
      console.time("tick")
    }
    runtime.tick()

    if (counter === 0) {
      console.time("serialize")
    } else if (counter === sampleRate) {
      console.timeEnd("tick")
    }

    ws.send(runtime.serialize());
    if (counter === sampleRate) {
      console.timeEnd("serialize")
      counter = 0
    } else {
      counter++
    }
  }, 1000 / messagesPerSecond)
});

const port = getPort()
server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})