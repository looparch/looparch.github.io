const m2j = require('markdown-to-json')
const { promises: fs } = require('fs')
const path = require('path')

const manufacturer = `bover`
const initialDirectory = `./src/markdown-pages/${manufacturer}/`

async function getMdFiles(pathStr = './src/markdown-pages/') {
  const entries = await fs.readdir(pathStr, { withFileTypes: true })

  const files = entries
    .filter((file) => !file.isDirectory())
    .filter((file) => file.name.includes('.md'))
    .map((file) => ({
      ...file,
      path: `${pathStr}${file.name}`,
      dir: path.dirname(`${pathStr}${file.name}`),
    }))

  const folders = entries.filter((folder) => folder.isDirectory())

  for (const folder of folders) {
    files.push(...(await getMdFiles(`${pathStr}${folder.name}/`)))
  }

  return files
}

async function createProductArray(dir) {
  const files = await getMdFiles(dir)

  const productArray = []

  await asyncForEach(files, (file) => {
    const jsonObj = m2j.parse([file.path], { width: 1, content: false })
    const obj = JSON.parse(jsonObj)
    obj.index.localDir = `${file.dir}/`
    productArray.push(obj.index)
  })

  return productArray
}

(async () => {
  const products = await createProductArray(initialDirectory)
  console.log(products)
})()
