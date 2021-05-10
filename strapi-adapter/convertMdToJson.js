const { promises: fs } = require('fs');
const { createProductArrayFromMdFiles } = require('./lib/createProductArrayFromMdFiles')

const manufacturer = 'area-environments'
const initialDirectory = `../src/markdown-pages/${manufacturer}/`

;(async () => {
  const products = await createProductArrayFromMdFiles(initialDirectory)

  await fs.writeFile(`${initialDirectory}allProducts.json`, JSON.stringify(products))
  console.log(products[0])
})()
