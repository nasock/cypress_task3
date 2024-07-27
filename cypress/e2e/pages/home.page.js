import BasicPageWithArticleList from './basic-with-article-list.page.js';

const tagListSelector = 'div[class*="tag-list"]';
const tagSelector = 'a[class*="tag-pill"]';

export default class HomePage extends BasicPageWithArticleList{

    getTags(){        
        return super.getElement(tagSelector);
    }

    clickRandomTag(maxNum){
        const randomNum = Math.floor(Math.random() * maxNum) + 1;
        const randomTagSelector = tagListSelector + ` :nth-child(${randomNum})`;
        super.clickElement(randomTagSelector);
        return super.getElement(randomTagSelector);
    }
    
}