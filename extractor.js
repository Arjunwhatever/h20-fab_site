import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import HTMLtoJSX from './node_modules/htmltojsx/src/htmltojsx.js';

const htmlPath = './public/site.html';
const html = fs.readFileSync(htmlPath, 'utf-8');

// Extract CSS
const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (cssMatch) {
  fs.writeFileSync('./src/index.css', cssMatch[1].trim());
}

// Extract HTML body
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let bodyHtml = bodyMatch ? bodyMatch[1] : '';

// 1. Find all base64 images and save them
const base64Regex = /src="data:image\/([^;]+);base64,([^"]+)"/g;
bodyHtml = bodyHtml.replace(base64Regex, (match, ext, data) => {
  if (ext === 'svg+xml') ext = 'svg';
  const buffer = Buffer.from(data, 'base64');
  const hash = crypto.createHash('md5').update(buffer).digest('hex').slice(0, 8);
  const filename = `image-${hash}.${ext}`;
  const filepath = path.join('./public', filename);
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, buffer);
  }
  return `src="/${filename}"`;
});

// 2. Convert to JSX
const converter = new HTMLtoJSX({
  createClass: false,
});

let jsxContent = converter.convert(bodyHtml);
jsxContent = jsxContent.trim();

// 3. Output to App.tsx
const appTsx = `import React from 'react';

export default function App() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

if (!fs.existsSync('./src')) {
  fs.mkdirSync('./src');
}
fs.writeFileSync('./src/App.tsx', appTsx);
console.log('Extraction complete');
