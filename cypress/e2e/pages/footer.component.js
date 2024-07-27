import BasicElement from '../pages/basic-element.js';

const logoSelector = 'footer a[class*="logo"]';
const thinksterLinkSelector = 'footer a[href*="thinkster"]';

export default class FooterComponent extends BasicElement{

    clickLogo(){
        super.clickElement(logoSelector);
    }

    clickThinksterLink(){
        super.clickElement(thinksterLinkSelector);
    }

}