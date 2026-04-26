const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'ezgif-5a88a53bbfafc3bd-jpg');
const destDir = path.join(__dirname, 'public', 'frames');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') && !f.startsWith('._'));

files.sort((a, b) => {
  const numA = parseInt(a.replace(/\D/g, ''), 10);
  const numB = parseInt(b.replace(/\D/g, ''), 10);
  return numA - numB;
});

let count = 0;
files.forEach((file, index) => {
  const newName = `frame_${String(index + 1).padStart(4, '0')}.jpg`;
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newName));
  count++;
});

console.log(`Processed ${count} frames successfully.`);
