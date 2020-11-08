const titleToFilename = (title) => title.replace(/[:\/]/g, '');
const replaceSlash = (title) => title.replace(/\\/g, "/");

before(() => {
  cy.log(
    "Run your before each test"
  );
});

afterEach(() => {
  const imagedetails = "data:image/png;base64,";
  Cypress.env('imagebase64', null);
  const screenshotpath = `test-report/screenshots/${replaceSlash(Cypress.spec.name)}/${Cypress.mocha.getRunner().suite.title} -- ${titleToFilename(Cypress.mocha.getRunner().suite.ctx.currentTest.title.replace("#", ''))} (failed).png`;
  const filename = `${Cypress.spec.absolute}`.replace(`${replaceSlash(Cypress.spec.relative)}`, '') + screenshotpath;

  cy.task('converImgToBase64', filename).then((textOrNull) => {
    cy.log(Cypress.env('imagebase64'));
    if (textOrNull) {
      Cypress.env('imagebase64', imagedetails + textOrNull);
    }
  })
});