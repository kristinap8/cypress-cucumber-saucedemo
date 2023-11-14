import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cartPage } from '../../pages/cart.page';
import { productInfo } from './inventory.steps';

Given("User clicked the \'Checkout\' button in the cart page", () => {
    cartPage.clickCheckoutBtn();
})

Then("User sees the details of the previously added product, including the product name, product description, and product price", () => {
    productInfo.name.then((name) => {
        cartPage.getProductName().should('have.text', name);
    });
    productInfo.description.then((description) => {
        cartPage.getProductDescription().should('have.text', description);
    });
    productInfo.price.then((price) => {
        cartPage.getProductPrice().should('have.text', price);
    });
})

Then("User is redirected to the cart page", () => {
    cartPage.getTitle().should('have.text', 'Your Cart');
})