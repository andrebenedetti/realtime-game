export function drawPlayer(canvas: HTMLCanvasElement, x: number, y: number) {
  if (!canvas.getContext) return;

  const radius = 70;
  const ctx = canvas.getContext("2d");
  if (ctx === null) {
    return
  }
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#003300";
  ctx.stroke();
}

export function init() {
  console.log("Initializing...")
  const isHtmlCanvas = (el: HTMLElement): el is HTMLCanvasElement => {
    return el.tagName === "canvas"
  }
  const canvas = document.getElementById("canvas");
  if (canvas === null || !isHtmlCanvas(canvas)) {
    return
  }

  canvas.setAttribute("width", String(window.screen.width));
  canvas.setAttribute("height", String(window.screen.height));

  const FPS = 50;
  setInterval(() => {
    for (let obj of window.world) {
      drawPlayer(canvas, obj.x, obj.y);
    }
  }, 1000 / FPS);

  return canvas;
}

