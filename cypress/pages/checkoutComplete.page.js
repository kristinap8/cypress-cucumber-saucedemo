import Page from './page';

const title = '.title';
const successMessage = '.complete-header';

class CheckoutCompletePage extends Page {
    getTitle() {
        return super.getElement(title);
    }

    getSuccessMessage() {
        return super.getElement(successMessage);
    }
}

export const checkoutCompletePage = new CheckoutCompletePage();