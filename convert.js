const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folder = "./images";
const folderWebp = "./webp"

fs.readdir(folder, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.png') {
      const inputPath = path.join(folder, file);
      const outputPath = path.join(folderWebp, path.parse(file).name + '.webp');

      sharp(inputPath)
        .toFormat('webp')
        .toFile(outputPath)
        .then(() => console.log(`✅ Convertido: ${file}`))
        .catch(err => console.error(`❌ Error con ${file}:`, err));
    }
  });
});


//Ejecutar: node convert.js