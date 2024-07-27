import BasicPageWithArticleList from '../pages/basic-with-article-list.page.js';

const authorNameSelector = 'div[class*="user-info"] h4';
const followAuthorSelector = 'div[class*="user-info"] button';

class AuthorPage extends BasicPageWithArticleList{

    getAuthorName(){
        return super.getElement(authorNameSelector);
    }

    clickFollowAuthorButton(){
        super.clickElement(followAuthorSelector);
    }
    
}