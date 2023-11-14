import Page from './page';

const title = '.title';
const productNames = '.inventory_item_name';
const productPrices = '.inventory_item_price';
const sortDropdown = '.product_sort_container';
const productImages = 'img.inventory_item_img';
const productDescriptions = '.inventory_item_desc';
const addToCartBtns = '*[id*="add-to-cart"]';
const productsBtns = '.btn.btn_inventory';
const shoppingCartLink = '.shopping_cart_link';
const shoppingCartBadge = '.shopping_cart_badge';
const burgerBtn = '#react-burger-menu-btn';
const logoutBtn = '#logout_sidebar_link';
const footerContainer = '.footer';
const twitterLink = '.social_twitter a';
const facebookLink = '.social_facebook a';
const linkedinLink = '.social_linkedin a';

class InventoryPage extends Page {

    openPage() {
        super.openURL('/inventory.html');
    }

    getTitle() {
        return super.getElement(title);
    }

    getProductNamesArray() {
        return super.getElementsTextArray(productNames);
    }

    getProductPricesArray() {
        return super.getElementsFloatArray(productPrices);
    }

    getProductImagesAttributeValues(attribute) {
        return super.getElementsAttribute(productImages, attribute);
    }

    getProductNameByIndex(index) {
        return super.getElementTextByIndex(productNames, index);
    }

    getProductPriceByIndex(index) {
        return super.getElementTextByIndex(productPrices, index);
    }

    getProductDescriptionByIndex(index) {
        return super.getElementTextByIndex(productDescriptions, index);
    }

    getProductImageAttrByIndex(index, attribute) {
        return super.getElementAttributeByIndex(productImages, index, attribute);
    }

    getShoppingCartBadge() {
        return super.getElement(shoppingCartBadge);
    }

    getProductButtonByIndex(index) {
        return super.getElementByIndex(productsBtns, index);
    }

    getTwitterLink() {
        return super.getElement(twitterLink);
    }

    getFacebookLink() {
        return super.getElement(facebookLink);
    }

    getLinkedinLink() {
        return super.getElement(linkedinLink);
    }

    selectSortOption(option) {
        super.selectOption(sortDropdown, option);
    }

    clickProductNameByIndex(index) {
        super.clickElementByIndex(productNames, index);
    }

    clickAddToCartBtnByIndex(index) {
        super.clickElementByIndex(addToCartBtns, index);
    }

    clickShoppingCartLink() {
        super.clickElement(shoppingCartLink);
    }

    clickBurgerBtn() {
        super.clickElement(burgerBtn);
    }

    clickLogoutBtn() {
        super.clickElement(logoutBtn);
    }

    scrollDownToFooter() {
        super.scrollToElement(footerContainer);
    }
}

export const inventoryPage = new InventoryPage();