/// <reference types="cypress" />

import HomePage from '../pages/home.page.js';
import SigninPage from '../pages/signin.page.js';

describe('test article preview on the home page (signed in)', () => {

    beforeEach(() => {
        cy.visit('');
        let homePage = new HomePage();
        homePage.getNavigationBar().clickSignInLink();
        const signinPage = new SigninPage();
        signinPage.setEmailValue(Cypress.env('email'));
        signinPage.setPasswordValue(Cypress.env('password'));
        signinPage.clickSubmitButton();
        homePage = new HomePage();
        homePage.clickTabByName('Global Feed');
    });

    it('test case 10: "Like" button on the article preview', () => {
        const homePage = new HomePage();
        homePage.getAllArticles().then((value) => {
            let length = Cypress.$(value).length;
            const randomArticle = homePage.selectRandomArticle(length);

            randomArticle.getLikeButton().invoke('text').then((num)=>{
                const newNum = '' + (Number(num)+1);
                cy.log(newNum);

                randomArticle.clickLikeButton();
                randomArticle.getLikeButton().should('contain.text', newNum);

                randomArticle.clickLikeButton();
                randomArticle.getLikeButton().should('contain.text', num);
            });
        });
    });
})