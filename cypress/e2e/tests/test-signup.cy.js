/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import HomePage from '../pages/home.page.js';
import SignupPage from '../pages/signup.page.js';

const email = faker.internet.email();
const username = faker.string.alphanumeric({ length: { min: 5, max: 15 } });
const password = faker.internet.password({ length: 8 });
const randomUser = faker.string.alphanumeric({ length: { min: 5, max: 15 } });

describe('test sign up', () => {

    beforeEach(() => {
        cy.visit('');
        const homePage = new HomePage();
        homePage.getNavigationBar().clickSignUpLink();
    });

    it('test case 6: Sign up (valid data)', () => {
        const signupPage = new SignupPage();
        signupPage.setEmailValue(email);
        signupPage.setUsernameValue(username);
        signupPage.setPasswordValue(password);
        signupPage.clickSubmitButton();
        
        cy.url().should('eq', pageAddress);
        const homePage = new HomePage();
        homePage.getNavigationBar().getProfileLink().should('exist');
        homePage.getNavigationBar().getProfileLink().should('contain.text', username);

        homePage.getNavigationBar().getSettingsLink().should('exist');
        homePage.getNavigationBar().getNewArticleLink().should('exist');
    });
  
    it('test case 7: Sign up (empty fields)', () => {
        const signupPage = new SignupPage();
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', 'email can\'t be blank');

        signupPage.setEmailValue(email);
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', 'username can\'t be blank');

        signupPage.setUsernameValue(username);
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', 'password can\'t be blank');
    });

    it('test case 8: Sign up (invalid data)', () => {
        const signupPage = new SignupPage();
        let invalidEmail = email.replace('@', '');
        signupPage.setEmailValue(invalidEmail);
        signupPage.setUsernameValue(randomUser);
        signupPage.setPasswordValue(password);
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', `Please include an '@' in the email address. '${invalidEmail}' is missing an '@'.`);

        invalidEmail = email.replace('.', '');
        signupPage.setEmailValue(invalidEmail);
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', `Please include an '.' in the email address. '${invalidEmail}' is missing an '.'.`);

        invalidEmail = [email.slice(0, email.length - 2), '@', email.slice(email.length - 2)].join('');
        signupPage.setEmailValue(invalidEmail);
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', 'A part following \'@\' should not contain the symbol \'@\'.');

        invalidEmail = [email.slice(0, email.length - 2), '.', email.slice(email.length - 2)].join('');
        signupPage.setEmailValue(invalidEmail);
        signupPage.clickSubmitButton();
        signupPage.getErrorMessage().should('contain.text', 'A part following \'.\' should not contain the symbol \'.\'.');
    });

})