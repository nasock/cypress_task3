/// <reference types="cypress" />

import HomePage from '../pages/home.page.js';

describe('test tags on the home page', () => {

    beforeEach(() => {
        cy.visit('');
    });

    it('test case 9: Tags navigation in the "Popular Tags" box', () => {
        const homePage = new HomePage();
        homePage.getTags().then((value) => {
            const maxNum = Cypress.$(value).length;
            checkRandomTag(homePage, maxNum);
            checkRandomTag(homePage, maxNum);
        }); 
    });

    function checkRandomTag(homePage, maxNum){
        homePage.clickRandomTag(maxNum).invoke('text').then((tagName)=>{
            homePage.getAllTabs().each(() => {
                cy.contains(tagName); 
            });

            homePage.getAllArticles().each(() => {
                cy.contains(tagName)
            });
        });
    }
})