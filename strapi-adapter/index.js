const { promises: fs } = require('fs');
const { createProductArray } = require('./lib/createProductArray')

const manufacturer = 'windfall-lumber'
const initialDirectory = `../src/markdown-pages/${manufacturer}/`

;(async () => {
  const products = await createProductArray(initialDirectory)

  await fs.writeFile(`${initialDirectory}allProducts.json`, JSON.stringify(products))
  console.log(products[0])
})()
