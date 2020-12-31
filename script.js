const fs = require('fs');
const path = require('path');
const filesPrefix = '/hisham.work/';
const filePath = path.join(process.cwd(), 'docs', 'asset-manifest.json');
const fileData = JSON.parse(fs.readFileSync(filePath).toString());
fileData.entrypoints = fileData.entrypoints.map((str) => filesPrefix + str);
fs.writeFileSync(filePath, JSON.stringify(fileData, '', '\t'));
