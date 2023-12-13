export type WorldObject = {
  type: "player";
  x: number;
  y: number;
  username: string;
  serialize?: () => string;
};

export type TickEvent = WorldObject[];

export type PlayerConnectedEvent = {};

export type EventId = "tick" | "player_connected"

export type ServerEvent = {
    type: EventId
    event: TickEvent | PlayerConnectedEvent 
}

export function deserializeEvent(serialized: string): ServerEvent {
  const fieldSeparator = ",";
  const attrValueSeparator = ";";
  let [type, ...data] = serialized.split(fieldSeparator);
  if (data[data.length - 1] === "") {
    data.pop()
  }

  if (type === "tick") {
    return {
      type: "tick",
      event: data.map((wo: string) => {
        const [type, x, y, username] = wo.split(attrValueSeparator);

        if (type !== "player") {
          throw new Error("invalid event type");
        }

        return {
          type,
          x: Number(x),
          y: Number(y),
          username,
        };
      }) as TickEvent,
    };
  }

  return {
    type: "player_connected",
    event: {}
  };
}
