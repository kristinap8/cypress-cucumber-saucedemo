class Page {

    openURL(url) {
        cy.visit(url == undefined ? '/' : url);
    }

    getUrl() {
        return cy.url();
    }

    getBaseUrl() {
        return Cypress.config().baseUrl;
    }

    getElement(selector) {
        return cy.get(selector);
    }

    getElementsTextArray(selector) {
        return this.getElement(selector).then(elements => {
            return Array.from(elements).map((el) => el.innerText);
        });
    }

    getElementsFloatArray(selector) {
        return this.getElementsTextArray(selector).then(elements => {
            return elements.map((el) => parseFloat(el.replace('$', '')));
        });
    }

    getElementAttribute(selector, attribute) {
        return this.getElement(selector).invoke('attr', attribute);
    }

    getElementsAttribute(selector, attribute) {
        return this.getElement(selector).mapInvoke('getAttribute', attribute);
    }

    getElementByIndex(selector, index) {
        return this.getElement(selector).eq(index);
    }

    getElementTextByIndex(selector, index) {
        return this.getElementByIndex(selector, index).invoke('text');
    }

    getElementAttributeByIndex(selector, index, attribute) {
        return this.getElement(selector).eq(index).invoke('attr', attribute);
    }

    clickElement(selector) {
        this.getElement(selector).click();
    }

    clickElementByIndex(selector, index) {
        this.getElementByIndex(selector, index).click();
    }

    fillElement(selector, text) {
        this.getElement(selector).type(text);
    }

    selectOption(selector, option) {
        this.getElement(selector).select(option);
    }

    scrollToElement(selector) {
        this.getElement(selector).scrollIntoView();
    }

}

export default Page;