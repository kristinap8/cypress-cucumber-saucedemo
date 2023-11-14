import Page from './page';

const cancelBtn = '#cancel';
const continueBtn = '#continue';
const firstNameInput = '#first-name';
const lastNameInput = '#last-name';
const postalCodeInput = '#postal-code';
const errorMessage = '.error-message-container';

class CheckoutStepOnePage extends Page {
    getErrorMessage() {
        return super.getElement(errorMessage);
    }

    enterFirstName(text) {
        super.fillElement(firstNameInput, text);
    }

    enterLastName(text) {
        super.fillElement(lastNameInput, text);
    }

    enterPostalCode(text) {
        super.fillElement(postalCodeInput, text);
    }

    clickCancelBtn() {
        super.clickElement(cancelBtn);
    }

    clickContinueBtn() {
        super.clickElement(continueBtn);
    }
}

export const checkoutStepOnePage = new CheckoutStepOnePage();