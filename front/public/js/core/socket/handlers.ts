import {
  PlayerConnectedEvent,
  ServerEvent,
  TickEvent,
} from "../../../../../shared/runtime";
import { storeWorldState } from "../state";

function handleTick(e: TickEvent) {
  storeWorldState(e as TickEvent);
}

export function handleEvent(e: ServerEvent) {
  if (e.type === "tick") {
    return handleTick(e.event as TickEvent);
  }
  if (e.type === "player_connected") {
    return (e: PlayerConnectedEvent) => console.log(e);
  }
  return (e: PlayerConnectedEvent) =>
    console.log(`Received event without handler: ${JSON.stringify(e)}`);
}
