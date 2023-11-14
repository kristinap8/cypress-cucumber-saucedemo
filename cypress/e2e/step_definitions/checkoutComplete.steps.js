import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { checkoutCompletePage } from '../../pages/checkoutComplete.page';

Then("User is redirected to the {string} page", (page) => {
    checkoutCompletePage.getTitle().should('have.text', page);
})

Then("User sees the {string} message", (message) => {
    checkoutCompletePage.getSuccessMessage().should('have.text', message);
})