// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');
const imageToBase64 = require('image-to-base64');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on('after:screenshot', (details) => {
    const newPath = details.path.replace("#", '');
    return new Promise((resolve, reject) => {
      fs.rename(details.path, newPath, (err) => {
        if (err) return reject(err)
        resolve({ path: newPath })
      })
    })
  })
  on('task', {
    converImgToBase64 (filename) {
      if (fs.existsSync(filename)) {
        return imageToBase64(filename);
      }
      return null
    }
  })
}

