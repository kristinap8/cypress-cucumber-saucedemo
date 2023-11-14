import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '../../pages/login.page';
import { randomPassword } from "../../helper/generator";

Given("User navigated to the login page of the saucedemo website", () => {
    loginPage.openPage();
})

When("User enters {string} into the {string} field in the login page", (data, field) => {
    if (data == 'random') {
        loginPage.enterUsername()
    }
    else {
        switch (field) {
            case 'Username':
                loginPage.enterUsername(data);
                break;
            case 'Password':
                if (data === '[random]') {
                    loginPage.enterPassword(randomPassword());
                }
                else {
                    loginPage.enterPassword(data);
                }
                break;
            default:
                cy.wrap(0).should('not.eq', 0, 'Failure: Entering data into the field unsuccessful');
        }
    }
})

When("User clicks the \'Login\' button in the login page", () => {
    loginPage.clickLoginButton();
})

When('User logged in with the valid credentials', (table) => {
    const data = table.hashes()[0];
    loginPage.login(data["username"], data["password"]);
})

Then("User sees the {string} error message", (message) => {
    loginPage.getErrorMesssage().should('have.text', message);
})

Then("User is redirected to the login page", () => {
    loginPage.getUrl().should('eq', loginPage.getBaseUrl());
})

Then("The {string} field is empty", (field) => {
    switch (field) {
        case 'Username':
            loginPage.getUsernameField().should('have.value', '');
            break;
        case 'Password':
            loginPage.getPasswordField().should('have.value', '');
            break;
    }
})


