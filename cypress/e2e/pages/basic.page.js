import BasicElement from '../pages/basic-element.js';
import FooterComponent from '../pages/footer.component.js';
import NavigationBarComponent from '../pages/navigation-bar.component.js';

export default class BasicPage extends BasicElement{

    getFooter(){
        return new FooterComponent();
    }

    getNavigationBar(){
        return new NavigationBarComponent();
    }

}