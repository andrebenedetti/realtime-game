function drawPlayer(canvas, x, y) {
  if (!canvas.getContext) return;

  const radius = 70;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#003300";
  ctx.stroke();
}

function init() {
  const canvas = document.getElementById("canvas");
  canvas.setAttribute("width", window.screen.width);
  canvas.setAttribute("height", window.screen.height);

  const FPS = 50;
  setInterval(() => {
    for (let obj of window.world) {
      drawPlayer(canvas, obj.x, obj.y);
    }
  }, 1000 / FPS);

  return canvas;
}

const canvas = init();
