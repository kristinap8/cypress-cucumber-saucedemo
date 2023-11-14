import Page from './page';

const usernameInput = '#user-name';
const passwordInput = '#password';
const loginButton = '#login-button';
const errorMessage = '.error-message-container';

class LoginPage extends Page {

    openPage() {
        super.openURL();
    }

    getUsernameField() {
        return super.getElement(usernameInput);
    }

    getPasswordField() {
        return super.getElement(passwordInput);
    }

    getErrorMesssage() {
        return super.getElement(errorMessage);
    }

    enterUsername(text) {
        super.fillElement(usernameInput, text);
    }

    enterPassword(text) {
        super.fillElement(passwordInput, text);
    }

    clickLoginButton() {
        super.clickElement(loginButton);
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }
}

export const loginPage = new LoginPage();