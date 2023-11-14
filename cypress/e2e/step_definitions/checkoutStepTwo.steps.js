import { When } from "@badeball/cypress-cucumber-preprocessor";
import { checkoutStepTwoPage } from '../../pages/checkoutStepTwo.page';

When("User clicks the \'Finish\' button in the checkout step two page", () => {
    checkoutStepTwoPage.clickFinishBtn();
})