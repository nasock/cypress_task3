export default class BasicElement {

   getElement(selector){
    return cy.get(selector);
   }

   clickElement(selector, forced){
    cy.get(selector).click({force: forced});
   }

   setValueInElement(selector, inputValue){
    cy.get(selector).type(inputValue);
   }

   getNthElement(selector, index){
      return cy.get(selector).eq(index);
   }

   getChildElement(parent, childSelector){
      return parent.find(childSelector);
   }

   clickChildElement(parent, childSelector){
      parent.find(childSelector).click();
   }

}
