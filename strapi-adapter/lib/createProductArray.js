const { asyncForEach } = require('./helpers');
const { getMarkdownFiles } = require('./getMarkdownFiles');
const m2j = require('markdown-to-json');

exports.createProductArray = async function (dir) {
  const files = await getMarkdownFiles(dir)

  const productArray = []

  await asyncForEach(files, (file) => {
    const jsonObj = m2j.parse([file.path], { width: 1, content: false })
    const obj = JSON.parse(jsonObj)
    obj.index.localDir = `${file.dir}/`
    productArray.push(obj.index)
  })

  return productArray
}
