import BasicElement from '../pages/basic-element.js';

const articleSelector = 'div[class*="article-preview"]';
const likeButtonSelector = ' button';

export default class ArticlePreviewComponent extends BasicElement{

    constructor(index){
        super();
        this.index = index;
    }

    getArticle(){
        return super.getNthElement(articleSelector, this.index)
    }

    getLikeButton(){
        return super.getChildElement(this.getArticle(), likeButtonSelector);
    }

    clickLikeButton(){
        super.clickChildElement(this.getArticle(), likeButtonSelector);
    }

}