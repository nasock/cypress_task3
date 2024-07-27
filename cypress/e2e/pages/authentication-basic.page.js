import BasicPage from '../pages/basic.page.js';

const emailInputSelector = 'input[name="email"]';
const passwordInputSelector = 'input[type="password"]';
const submitButtonSelector = 'button[type="submit"]';
const errorMessageSelector = 'ul[class*="error-messages"] li';

export default class AuthenticationBasicPage extends BasicPage{

    setEmailValue(inputValue){
        super.setValueInElement(emailInputSelector, inputValue);
    }

    setPasswordValue(inputValue){
        super.setValueInElement(passwordInputSelector, inputValue);
    }

    clickSubmitButton(){
        super.clickElement(submitButtonSelector);
    }

    getErrorMessage(){
        return super.getElement(errorMessageSelector);
    }
    
}