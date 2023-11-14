import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { checkoutStepOnePage } from '../../pages/checkoutStepOne.page';
import { randomFirstName, randomLastName, randomPostalCode } from "../../helper/generator";

When("User clicks/clicked the {string} button in the checkout step one page", (btn) => {
    switch (btn) {
        case "Cancel":
            checkoutStepOnePage.clickCancelBtn();
            break;
        case "Continue":
            checkoutStepOnePage.clickContinueBtn();
            break;
    }
})

Given, When("User enters/entered a {string} into the {string} field in the checkout step one page", (data, field) => {
    switch (field) {
        case "First name":
            switch (data) {
                case '[random]':
                    checkoutStepOnePage.enterFirstName(randomFirstName());
                    break;
                case '[blank]':
                    break;
            }
            break;
        case "Last name":
            switch (data) {
                case '[random]':
                    checkoutStepOnePage.enterLastName(randomLastName());
                    break;
                case '[blank]':
                    break;
            }
            break;
        case "Zip/Postal code":
            switch (data) {
                case '[random]':
                    checkoutStepOnePage.enterPostalCode(randomPostalCode());
                    break;
                case '[blank]':
                    break;
            }
            break;
    }
})

Then("User sees {string} error message", (message) => {
    checkoutStepOnePage.getErrorMessage().should('have.text', message);
})