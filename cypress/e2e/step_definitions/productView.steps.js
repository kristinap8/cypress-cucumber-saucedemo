import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { productViewPage } from '../../pages/productView.page';
import { productInfo } from './inventory.steps';

Then("User is redirected to the product view page", () => {
    productViewPage.getUrl().should('contain', 'inventory-item.html');
})

Then("User sees product details that match the clicked product", () => {
    productInfo.name.then((name) => {
        productViewPage.getProductName().should('have.text', name);
    });
    productInfo.description.then((description) => {
        productViewPage.getProductDescription().should('have.text', description);
    });
    productInfo.price.then((price) => {
        productViewPage.getProductPrice().should('have.text', price);
    });
    productInfo["image attribute"].then((value) => {
        productViewPage.getProductImage().should('have.attr', 'alt', value);
    });
})