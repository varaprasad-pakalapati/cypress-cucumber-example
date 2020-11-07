// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import addContext from 'mochawesome/addContext';
import fs from 'fs';

const titleToFilename = (title) => title.replace(/[:\/]/g, '');
const replaceSlash = (title) => title.replace(/\\/g, "/");
const base64img = (filename) => imageToBase64(filename);

function base64_encode(filename) {
    var bitmap = fs.readFileSync(filename);
    return new Buffer.from(bitmap).toString('base64');
}

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        // const screenshotpath = `test-report/html/screenshots/${replaceSlash(Cypress.spec.name)}/${titleToFilename(runnable.parent.title)} -- ${titleToFilename(test.title.replace("#", ''))} (failed).png`;
        // const filename = `${Cypress.spec.absolute}`.replace(`${replaceSlash(Cypress.spec.relative)}`, '') + screenshotpath;

        const tempfile1 = "/Users/e1206932/Desktop/test.png";
        // const tempfile2 = "\\Users\\e1206932\\Desktop\\test.png";
        var imagebase64 = base64_encode(tempfile1);
        addContext({ test }, imagebase64);
    }
})