import AuthenticationBasicPage from '../pages/authentication-basic.page.js';

const registerLinkSelector = 'ul[class*="nav"] a[href*="login"]';

export default class SigninPage extends AuthenticationBasicPage{

    clickRegisterLink(){
        super.clickElement(registerLinkSelector);
    }
    
}