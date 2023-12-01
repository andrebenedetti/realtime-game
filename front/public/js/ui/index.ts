
let ctx: CanvasRenderingContext2D

export function drawPlayer(x: number, y: number) {
  const radius = 70;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#003300";
  ctx.stroke();
}

export function initCanvas() {
  const isHtmlCanvas = (el: HTMLElement): el is HTMLCanvasElement => el.tagName === "CANVAS"

  const c = document.getElementById("canvas");
  if (c === null || !isHtmlCanvas(c)) {
    throw new Error("Couldn't initialize canvas. Can't recover from this error.")
  }

  const context = c.getContext("2d")
  if (!context) {
    throw new Error("Couldn't initialize canvas. Can't recover from this error.")
  }

  ctx = context
}

