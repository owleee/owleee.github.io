export default function circle(
  ctx,
  x,
  y,
  r,
  lineWidth = 1,
  fill = false,
  fillColour = "#000000"
) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillColour;
  if (!fill) ctx.stroke();
  if (fill) ctx.fill();
  ctx.closePath();
}

export function rectangle(ctx, x, y, width, height, colour) {
  ctx.beginPath();
  ctx.fillStyle = colour;
  ctx.rect(x, y, width, height);
  ctx.fill();
}

export function XYrectangle(ctx, x, y, x2, y2, colour) {
  ctx.beginPath();
  ctx.fillStyle = colour;
  ctx.rect(x, y, x2 - x, y2 - y);
  ctx.fill();
}
