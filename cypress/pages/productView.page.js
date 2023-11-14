import Page from './page';

const productName = '.inventory_details_name';
const productDescription = '.inventory_details_desc';
const productPrice = '.inventory_details_price';
const productImage = '.inventory_details_img';

class ProductViewPage extends Page {
    getProductName() {
        return super.getElement(productName);
    }

    getProductDescription() {
        return super.getElement(productDescription);
    }

    getProductPrice() {
        return super.getElement(productPrice);
    }

    getProductImage() {
        return super.getElement(productImage);
    }
}

export const productViewPage = new ProductViewPage();