import Page from './page';

const finishBtn = '#finish';

class CheckoutStepTwoPage extends Page {
    clickFinishBtn() {
        super.clickElement(finishBtn);
    }
}

export const checkoutStepTwoPage = new CheckoutStepTwoPage();