const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');
const { asyncForEach } = require('./lib/helpers');

const manufacturer = 'arktura'
const initialLocation = `../src/markdown-pages/${manufacturer}/allProducts.json`

const strapiServer = 'http://localhost:1337/products'

async function loadAndPostProducts(location) {
  const data = fs.readFileSync(location, { encoding: 'utf8' })
  return data
}

async function postProductData (postData) {
  console.log('postProductData', postData)
  const config = {
    headers: {
      ...postData.getHeaders(),
    },
  }

  try {
    const response = await axios.post(strapiServer, postData, config)
    console.log(response.data.title)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

;(async () => {
  const products = await loadAndPostProducts(initialLocation)
  const list = JSON.parse(products)
  let productJSON;

  await asyncForEach(list, async (listItem) => {
    console.log('tick', listItem.title)
    const formData = new FormData()
    const product = {
      title: listItem.title,
      subtitle: listItem.subtitle,
      url: listItem.href,
      designer: listItem.designer,
      description: unescape(listItem.description),
      manufacturer: 2,
      categories: 2,
    }

    productJSON = JSON.stringify(product)
    formData.append('data', productJSON)

    if (listItem.image_primary) {
      formData.append(
        'files.image_primary',
        fs.readFileSync(`${listItem.localDir}${listItem.image_primary}`),
        path.basename(listItem.image_primary)
      )
    }

    if (listItem.image_secondary) {
      formData.append(
        'files.image_secondary',
        fs.readFileSync(`${listItem.localDir}${listItem.image_secondary}`),
        path.basename(listItem.image_secondary)
      )
    }

    const returnData = await postProductData(formData)
    console.log(returnData)
  })
})()
