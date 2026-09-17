const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/91934/.gemini/antigravity-ide/brain/005fac33-70aa-4aec-9121-b05ba0b763af/.user_uploaded/media_1789636151976.png';

async function generate() {
  const rawBuf = fs.readFileSync(inputPath);
  const base64 = rawBuf.toString('base64');

  // Create square 512x512 with transparent padding for favicons
  const squareBuf = await sharp(inputPath)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // SVG representation wrapping base64
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 171" width="200" height="171">
  <image href="data:image/png;base64,${base64}" width="200" height="171" preserveAspectRatio="xMidYMid meet" />
</svg>`;

  // Write public files
  fs.writeFileSync('public/favicon.png', squareBuf);
  fs.writeFileSync('public/logo.png', rawBuf);
  fs.writeFileSync('public/favicon.ico', squareBuf);
  fs.writeFileSync('public/favicon.svg', svgContent);
  fs.writeFileSync('public/logo.svg', svgContent);

  // Write cached asset images
  fs.writeFileSync('public/assets/img/63f262e3982ade09.png', rawBuf);
  fs.writeFileSync('public/assets/img/b1418bf1535cec10.png', rawBuf);
  fs.writeFileSync('public/assets/img/9aa4856511c8e304.png', rawBuf);

  console.log('Successfully generated all logo & favicon assets!');
}

generate().catch(console.error);
