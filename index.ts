import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

class Player {
  name: string;
  x: number;
  y: number;

  constructor(name: string, x: number, y: number) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  serialize() {
    return `player;${this.x};${this.y};${this.name}`;
  }
}

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  const players = [
    new Player("slayer1000", 100, 100),
    new Player("sheld0r", 270, 270),
  ];
  ws.send(players.map((p) => p.serialize()));
});
