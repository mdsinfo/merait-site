import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const src = "public/brand/source.png";
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

function px(x, y) {
  const i = (y * width + x) * channels;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
}

let split = Math.floor(height / 2);
for (let y = Math.floor(height * 0.35); y < Math.floor(height * 0.7); y++) {
  const [r, g, b] = px(8, y);
  const [r2, g2, b2] = px(8, y + 2);
  if (b > r + 40 && b2 < 80 && r2 > 200) {
    split = y + 1;
    break;
  }
}

function cropRegion(y0, y1, mode) {
  const out = Buffer.alloc((y1 - y0) * width * 4);
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = px(x, y);
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max - min;
      let alpha = 255;
      let nr = r;
      let ng = g;
      let nb = b;
      const lightPaper = sat < 36 && r > 200 && g > 200 && b > 200;
      const dividerBlue = b > 70 && b > r + 15 && g < 110 && sat > 25;
      if (lightPaper || dividerBlue) alpha = 0;
      if (mode === "on-dark" && alpha > 0) {
        const markPixel = g > 120 && g + 25 >= b;
        if (!markPixel) {
          nr = 255;
          ng = 255;
          nb = 255;
        }
      }
      const o = ((y - y0) * width + x) * 4;
      out[o] = nr;
      out[o + 1] = ng;
      out[o + 2] = nb;
      out[o + 3] = alpha;
    }
  }
  return out;
}

function bounds(buf, w, h) {
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (buf[(y * w + x) * 4 + 3] > 20) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, minY, maxX, maxY };
}

function dropFullRows(buf, h) {
  for (let y = 0; y < h; y++) {
    let n = 0;
    for (let x = 0; x < width; x++) if (buf[(y * width + x) * 4 + 3] > 20) n++;
    if (n > width * 0.75) {
      for (let x = 0; x < width; x++) buf[(y * width + x) * 4 + 3] = 0;
    }
  }
}

async function save(buf, h, name) {
  dropFullRows(buf, h);
  const box = bounds(buf, width, h);
  const pad = 8;
  const left = Math.max(0, box.minX - pad);
  const top = Math.max(0, box.minY - pad);
  const cropW = Math.min(width - left, box.maxX - box.minX + 1 + pad * 2);
  const cropH = Math.min(h - top, box.maxY - box.minY + 1 + pad * 2);
  await sharp(buf, { raw: { width, height: h, channels: 4 } })
    .extract({ left, top, width: cropW, height: cropH })
    .png()
    .toFile(`public/brand/${name}`);
  console.log(name, cropW, cropH, "split", split);
}

await mkdir("public/brand", { recursive: true });
const bottomH = height - split;
await save(cropRegion(split, height, "light-bg"), bottomH, "merait-logo.png");
await save(cropRegion(split, height, "on-dark"), bottomH, "merait-logo-light.png");

const horizontal = cropRegion(split, height, "light-bg");
dropFullRows(horizontal, bottomH);
const box = bounds(horizontal, width, bottomH);
let gapStart = -1;
let gapEnd = -1;
for (let x = box.minX; x <= box.maxX; x++) {
  let opaque = 0;
  for (let y = box.minY; y <= box.maxY; y++) {
    if (horizontal[(y * width + x) * 4 + 3] > 20) opaque++;
  }
  if (opaque === 0) {
    if (gapStart < 0) gapStart = x;
    gapEnd = x;
  } else if (gapStart > box.minX + 20) {
    break;
  } else {
    gapStart = -1;
    gapEnd = -1;
  }
}
const markRight = gapStart > 0 ? gapStart : box.minX + Math.floor((box.maxX - box.minX) * 0.32);
const markBuf = Buffer.alloc(bottomH * width * 4);
horizontal.copy(markBuf);
for (let y = 0; y < bottomH; y++) {
  for (let x = markRight; x < width; x++) markBuf[(y * width + x) * 4 + 3] = 0;
}
console.log("mark cut", markRight, "gap", gapStart, gapEnd);
await save(markBuf, bottomH, "merait-mark.png");
