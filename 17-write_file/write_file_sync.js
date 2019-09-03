const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'index.txt');

fs.writeFileSync(filePath, 'written file in sync manner');