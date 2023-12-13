import { drawPlayer, initCanvas } from "../ui";
import { getWorldState } from "./state";
import { setupWebsocket } from "./socket/websocket";

function loop() {
    for (let obj of getWorldState()) {
        drawPlayer(obj.x, obj.y);
    }
}

export function run() {
    const FPS = 50;

    setupWebsocket()
    initCanvas()
    setInterval(() => {
        loop()
    }, 1000 / FPS);
}