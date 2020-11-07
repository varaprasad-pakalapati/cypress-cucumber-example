import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://facebook.com";

Given(`I kinda open Facebook page`, () => {
  cy.visit(url);
});

Then(`I am very happy`, () => {
  cy.title().should("include", "Facebook");
});
