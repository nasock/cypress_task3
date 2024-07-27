/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import HomePage from '../pages/home.page.js';
import SigninPage from '../pages/signin.page.js';

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password({ length: 8 });

describe('test sign in', () => {

    beforeEach(() => {
        cy.visit('');
        const homePage = new HomePage();
        homePage.getNavigationBar().clickSignInLink();
    });

    it('test case 1: Sign in (valid data)', () => {
        const signinPage = new SigninPage();
        signinPage.setEmailValue(Cypress.env('email'));
        signinPage.setPasswordValue(Cypress.env('password'));
        signinPage.clickSubmitButton();

        cy.url().should('eq', pageAddress);
        const homePage = new HomePage();
        homePage.getNavigationBar().getProfileLink().should('exist');
        homePage.getNavigationBar().getProfileLink().should('contain.text', Cypress.env('username'));

        homePage.getNavigationBar().getSettingsLink().should('exist');
        homePage.getNavigationBar().getNewArticleLink().should('exist');
    });
  
    it('test case 2: Sign in (empty fields)', () => {
        const signinPage = new SigninPage();
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', 'email can\'t be blank');

        signinPage.setEmailValue(Cypress.env('email'));
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', 'password can\'t be blank');
    });

    it('test case 3: Sign in (invalid email)', () => {
        const signinPage = new SigninPage();
        let invalidEmail = randomEmail.replace('@', '');
        signinPage.setEmailValue(invalidEmail);
        signinPage.setPasswordValue(Cypress.env('password'));
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', `Please include an '@' in the email address. '${invalidEmail}' is missing an '@'.`);

        invalidEmail = randomEmail.replace('.', '');
        signinPage.setEmailValue(invalidEmail);
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', `Please include an '.' in the email address. '${invalidEmail}' is missing an '.'.`);

        invalidEmail = [randomEmail.slice(0, randomEmail.length - 2), '@', randomEmail.slice(randomEmail.length - 2)].join('');
        signinPage.setEmailValue(invalidEmail);
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', 'A part following \'@\' should not contain the symbol \'@\'.');

        invalidEmail = [randomEmail.slice(0, randomEmail.length - 2), '.', randomEmail.slice(randomEmail.length - 2)].join('');
        signinPage.setEmailValue(invalidEmail);
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', 'A part following \'.\' should not contain the symbol \'.\'.');

    });

    it('trest case 4: Sign in (unregistered user)', () => {
        const signinPage = new SigninPage();
        signinPage.setEmailValue(randomEmail);
        signinPage.setPasswordValue(Cypress.env('password'));
        signinPage.clickSubmitButton();
        signinPage.getErrorMessage().should('contain.text', 'email or password is invalid');
    });

    it('trest case 5: Sign in (incorrect password)', () => {
        const signinPage = new SigninPage();
        signinPage.setEmailValue(Cypress.env('email'));
        signinPage.setPasswordValue(randomPassword);
        signinPage.clickSubmitButton();

        signinPage.getErrorMessage().should('contain.text', 'email or password is invalid');
    });

})