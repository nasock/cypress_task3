import BasicElement from '../pages/basic-element.js';

const logoSelector = 'nav[class*="navbar"]>div>a[href="/"]';
const homePageLinkSelector = 'nav[class*="navbar"] li a[href="/"]';
const signInLinkSelector = 'nav[class*="navbar"] a[href*="login"]';
const signUpLinkSelector = 'nav[class*="navbar"] a[href*="register"]';
const profileLinkSelector = 'nav[class*="navbar"] a[href*="profile"]';
const settingsLinkSelector = 'nav[class*="navbar"] a[href*="settings"]';
const newArticleLinkSelector = 'nav[class*="navbar"] a[href*="editor"]';

export default class NavigationBarComponent extends BasicElement{

    getProfileLink(){
        return super.getElement(profileLinkSelector);
    }

    getSettingsLink(){
        return super.getElement(settingsLinkSelector);
    }

    getNewArticleLink(){
        return super.getElement(newArticleLinkSelector);
    }

    clickLogo(){
        super.clickElement(logoSelector);
    }

    clickHomePageLink(){
        super.clickElement(homePageLinkSelector);
    }

    clickSignInLink(){
        super.clickElement(signInLinkSelector);
    }

    clickSignUpLink(){
        super.clickElement(signUpLinkSelector, true);
    }

}