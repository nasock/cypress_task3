import BasicPage from '../pages/basic.page.js';
import ArticlePreviewComponent from '../pages/article-preview.component.js';

const tabsSelector = 'div[class*="toggle"] li';
const articleSelector = 'div[class*="article-preview"]';
const pagesSelector = 'li[class*="page-item"]';

export default class BasicPageWithArticleList extends BasicPage{

    getAllTabs(){
        return super.getElement(tabsSelector);
    }

    getAllArticles(){
        return super.getElement(articleSelector);
    }

    getAllPages(){
        return super.getElement(pagesSelector);
    }

    clickTabByName(tabName){
        this.getAllTabs().each(() => {
            cy.contains(tabName).click();
        });
    }

    selectRandomArticle(maxNum){
        const randomNum = Math.floor(Math.random() * maxNum);
        return new ArticlePreviewComponent(randomNum);
    }

    clickPageByNumber(pageNumber){
        this.getAllPages().each(() => {
            cy.contains(pageNumber).click();
        });
    }
    
}