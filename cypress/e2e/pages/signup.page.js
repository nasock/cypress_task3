import AuthenticationBasicPage from '../pages/authentication-basic.page.js';

const usernameInputSelector = 'input[name="username"]';
const signinLinkSelector = 'ul[class*="nav"] a[href*="register"]';

export default class SignupPage extends AuthenticationBasicPage{

    setUsernameValue(inputValue){
        super.setValueInElement(usernameInputSelector, inputValue);
    }

    clickSigninLink(){
        super.clickElement(signinLinkSelector);
    }
    
}