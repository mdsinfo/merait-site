import sharp from "sharp";

const src = "public/brand/source-ref.png";
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

function isPaper(r, g, b, a) {
  if (a < 16) return true;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max - min < 28 && r > 220 && g > 220 && b > 220;
}

function isMark(r, g, b) {
  return g > 120 && g + 20 >= b && g > r - 10;
}

const base = Buffer.alloc(width * height * 4);
const light = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const r = data[i * 4];
  const g = data[i * 4 + 1];
  const b = data[i * 4 + 2];
  const a = data[i * 4 + 3];
  const paper = isPaper(r, g, b, a);
  const o = i * 4;
  base[o] = r;
  base[o + 1] = g;
  base[o + 2] = b;
  base[o + 3] = paper ? 0 : 255;
  if (paper) {
    light[o + 3] = 0;
  } else if (isMark(r, g, b)) {
    light[o] = r;
    light[o + 1] = g;
    light[o + 2] = b;
    light[o + 3] = 255;
  } else {
    light[o] = 255;
    light[o + 1] = 255;
    light[o + 2] = 255;
    light[o + 3] = 255;
  }
}

function bounds(buf) {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (buf[(y * width + x) * 4 + 3] > 20) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, minY, maxX, maxY };
}

async function tight(buf, name) {
  const box = bounds(buf);
  const pad = 1;
  const left = Math.max(0, box.minX - pad);
  const top = Math.max(0, box.minY - pad);
  const cropW = Math.min(width - left, box.maxX - left + 1 + pad);
  const cropH = Math.min(height - top, box.maxY - top + 1 + pad);
  await sharp(buf, { raw: { width, height, channels: 4 } })
    .extract({ left, top, width: cropW, height: cropH })
    .png()
    .toFile(name);
  console.log(name, cropW, cropH);
  return { cropW, cropH, left, top, box };
}

const darkBox = await tight(base, "public/brand/merait-logo.png");
await tight(light, "public/brand/merait-logo-light.png");

const box = bounds(base);
let gap = -1;
for (let x = box.minX + 24; x < box.maxX; x++) {
  let opaque = 0;
  for (let y = box.minY; y <= box.maxY; y++) {
    if (base[(y * width + x) * 4 + 3] > 20) opaque++;
  }
  if (opaque === 0) {
    gap = x;
    break;
  }
}
const markBuf = Buffer.from(base);
if (gap > 0) {
  for (let y = 0; y < height; y++) {
    for (let x = gap; x < width; x++) markBuf[(y * width + x) * 4 + 3] = 0;
  }
}
await tight(markBuf, "public/brand/merait-mark.png");
console.log("gap", gap);
