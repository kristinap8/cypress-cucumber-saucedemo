import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { inventoryPage } from '../../pages/inventory.page';
import { sortNumbersAsc, sortNumbersDesc, sortWordsAsc, sortWordsDesc } from "../../helper/sort";
import { randomIndex, randomIndexes } from '../../helper/generator';

let productInfo;
let productIndexes;
let productInd;

When("User selects {string} from the sorting dropdown", (option) => {
    inventoryPage.selectSortOption(option);
})

When("User clicks/clicked the {string} link/button for {string} product(s) in the inventory page", (button, productIndex) => {
    productIndexes = [];
    if (productIndex === '[random]') {
        productInd = randomIndex();
    } else if (productIndex === '[different random]') {
        productIndexes = randomIndexes();
    } else {
        productInd = parseInt(productIndex);
    }
    if (productIndex !== '[different random]') {
        productInfo = {
            "name": inventoryPage.getProductNameByIndex(productInd).then((name) => { return name; }),
            "description": inventoryPage.getProductDescriptionByIndex(productInd).then((description) => { return description; }),
            "price": inventoryPage.getProductPriceByIndex(productInd).then((price) => { return price; }),
            "image attribute": inventoryPage.getProductImageAttrByIndex(productInd, 'alt').then((attr) => { return attr })
        }
    }
    switch (button) {
        case 'product title':
            inventoryPage.clickProductNameByIndex(productInd);
            break;
        case 'Add to cart':
            if (productIndexes.length == 0) {
                inventoryPage.clickAddToCartBtnByIndex(productInd);
            } else {
                productIndexes.forEach((index) => {
                    inventoryPage.clickAddToCartBtnByIndex(index);
                });
            }
            break;
    }
})
export { productInfo };

When("User clicks/clicked the {string} icon/button in the inventory page", (btn) => {
    switch (btn) {
        case "shopping cart":
            inventoryPage.clickShoppingCartLink();
            break;
        case "Burger":
            inventoryPage.clickBurgerBtn();
            break;
        case "Logout":
            inventoryPage.clickLogoutBtn();
            break;
    }
})

When("User scrolls down to the footer", () => {
    inventoryPage.scrollDownToFooter();
})

Then("Products are displayed in {string} and {string} order", (order1, order2) => {
    if (order1 === 'alphabetical') {
        inventoryPage.getProductNamesArray().then(names => {
            if (order2 === 'ascending') {
                expect(names).to.deep.eq(sortWordsAsc(names));
            } else if (order2 === 'descending') {
                expect(names).to.deep.eq(sortWordsDesc(names));
            }
        });
    } else if (order1 === 'numerical') {
        inventoryPage.getProductPricesArray().then(prices => {
            if (order2 === 'ascending') {
                expect(prices).to.deep.eq(sortNumbersAsc(prices));
            } else if (order2 === 'descending') {
                expect(prices).to.deep.eq(sortNumbersDesc(prices));
            }
        });
    }
})

Then("User sees {string} in the inventory page", (value) => {
    switch (value) {
        case "product images that match their names":
            inventoryPage.getProductImagesAttributeValues('alt').then(altValues => {
                inventoryPage.getProductNamesArray().then(names => {
                    expect(altValues).to.deep.eq(names);
                })
            });
            break;
        case "the 'Remove' button":
            inventoryPage.getProductButtonByIndex(productInd).should('have.text', 'Remove');
            break;
    }
})

Then("User is redirected to the inventory page", () => {
    inventoryPage.getTitle().should('have.text', 'Products');
})

Then("The header's shopping cart badge displays {string}", (number) => {
    if (number === 'the correct count') {
        inventoryPage.getShoppingCartBadge().should('have.text', productIndexes.length);
    } else {
        inventoryPage.getShoppingCartBadge().should('have.text', parseInt(number));
    }
})

Then("The {string} link contains correct href attribute", (socialMedia) => {
    switch (socialMedia) {
        case "Twitter":
            inventoryPage.getTwitterLink().should('have.attr', 'href', 'https://twitter.com/saucelabs');
            break;
        case "Facebook":
            inventoryPage.getFacebookLink().should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
            break;
        case "LinkedIn":
            inventoryPage.getLinkedinLink().should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
            break;
    }
})


