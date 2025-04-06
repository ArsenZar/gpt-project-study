// build.js
const fs = require('fs');
const path = require('path');

// Простой пример скрипта, який створює папку
const dirPath = path.join(__dirname, 'createByScript');
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log('Directory created!');
} else {
  console.log('Directory already exists!');
}
