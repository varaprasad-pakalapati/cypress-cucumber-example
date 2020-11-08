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

const titleToFilename = (title) => title.replace(/[:\/]/g, '');
const replaceSlash = (title) => title.replace(/\\/g, "/");

// afterEach(() => {
//     // const tempfile1 = "/Users/e1206932/Desktop/test.png";
//     const imagedetails = "data:image/png;base64,";

//     // cy.log("********************");
//     // cy.log(Cypress.spec.name);
//     // cy.log(Cypress.spec.relative);
//     // cy.log(Cypress.spec.absolute);
//     // cy.log(Cypress.runner.ctx.currentTest.title);
//     // cy.log(Cypress.mocha.getRunner().suite.ctx.currentTest.title);
//     // cy.log(Cypress.mocha.getRunner().suite.title);
//     // const _onRunnableRun = Cypress.runner.runnable.parent..onRunnableRun
//     // Cypress.runner.onRunnableRun = function (runnableRun, runnable, args) {
//     // 	const r = runnable
//     //   const test = r.ctx.currentTest.title
//     //   cy.log(test);
//     // }
//     const screenshotpath = `test-report/screenshots/${replaceSlash(Cypress.spec.name)}/${Cypress.mocha.getRunner().suite.title} -- ${titleToFilename(Cypress.mocha.getRunner().suite.ctx.currentTest.title.replace("#", ''))} (failed).png`;
//     // cy.log(screenshotpath);
//     const filename = `${Cypress.spec.absolute}`.replace(`${replaceSlash(Cypress.spec.relative)}`, '') + screenshotpath;
//     // console.log(filename);
//     // cy.log(filename);

//     cy.task('converImgToBase64', filename).then((textOrNull) => {
//         cy.log("image base64 value " + textOrNull);
//         if (textOrNull) {
//             cy.log("Check image base64 valiesiton is correct or now");
//             Cypress.env('imagebase64', imagedetails + textOrNull);
//         }
//     })
// });

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        if (Cypress.env('imagebase64')) {
            console.log(Cypress.env('imagebase64'));
            console.log("Inside support/index.js")
            addContext({ test }, Cypress.env('imagebase64'));
        }
    }
});