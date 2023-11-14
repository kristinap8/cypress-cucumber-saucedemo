import Page from './page';

const title = '.title';
const productName = '.inventory_item_name';
const productDescription = '.inventory_item_desc';
const productPrice = '.inventory_item_price';
const checkoutBtn = '#checkout';

class CartPage extends Page {
    getTitle() {
        return super.getElement(title);
    }

    getProductName() {
        return super.getElement(productName);
    }

    getProductDescription() {
        return super.getElement(productDescription);
    }

    getProductPrice() {
        return super.getElement(productPrice);
    }

    clickCheckoutBtn() {
        super.clickElement(checkoutBtn);
    }
}

export const cartPage = new CartPage();