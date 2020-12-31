const fs = require('fs');
const path = require('path');

const filesPrefix = '/hisham.work/';
const filePath = path.join(process.cwd(), 'docs', 'asset-manifest.json');

async function init() {
  const fileData = JSON.parse(await fs.readFileSync(filePath).toString());
  fileData.entrypoints = fileData.entrypoints.map((str) => filesPrefix + str);
  await fs.writeFileSync(filePath, JSON.stringify(fileData, '', '\t'));
}

init();
