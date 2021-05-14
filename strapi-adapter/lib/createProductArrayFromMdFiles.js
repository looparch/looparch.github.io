const { asyncForEach } = require('./helpers');
const { gatherMarkdownFiles } = require('./gatherMarkdownFiles');
const m2j = require('markdown-to-json');

exports.createProductArrayFromMdFiles = async function (dir) {
  const files = await gatherMarkdownFiles(dir)

  const productArray = []

  await asyncForEach(files, (file) => {
    const jsonObj = m2j.parse([file.path], { width: 1, content: false })
    const obj = JSON.parse(jsonObj)
    obj.index.localDir = `${file.dir}/`
    productArray.push(obj.index)
  })

  return productArray
}
