import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[id="Username"]');
    }

    get inputPassword () {
        return $('input[id="Password"]');
    }

    get btnSubmit () {
        return $('button[id="m_login_signin_submit"]');
    }
    get klikTransaction () {
        return $('//*[@id="m_header_menu"]/ul/li[1]/a/i[2]');
    }
    get klikRegister () {
        return $('//*[@id="m_header_menu"]/ul/li[1]/div/ul/li[2]/a');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async bukaRegisterTransaction() {
        await this.klikTransaction.click();
        await this.klikRegister.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url(`http://phikpappdev03.pertamina.com:8008/`)
    }
}

export default new LoginPage();
