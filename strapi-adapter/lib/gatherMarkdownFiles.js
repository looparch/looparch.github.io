const { promises: fs } = require('fs')
const path = require('path')

gatherMarkdownFiles = async function (pathStr = '../src/markdown-pages/') {
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
    files.push(...(await gatherMarkdownFiles(`${pathStr}${folder.name}/`)))
  }

  return files
}

exports.gatherMarkdownFiles = gatherMarkdownFiles
