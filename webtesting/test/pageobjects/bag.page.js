const Page = require('./page');

/**
 * sub page containing bag locators
 */
 class BagPage extends Page {

    get bagIcon () {
      return $('#menuCart');
    }

    get summaryBagModal () {
      return $('#toolTipCart > div > table');
    }

    get summaryBagModalImageItems () {
      return $$('#product > td:nth-child(1) > a > img'); 
    }

    get summaryBagModalNameItems () {
      return $$('#product > td:nth-child(2) > a > h3'); 
    }

    get priceItems () {
        return $$('#product > td:nth-child(3) > p.price');
    }

    get totalPrice () {
        return $$('#toolTipCart > div > table  span.cart-total')[0];
    }

    get removeItemBtn() {
      return $$('#product > td:nth-child(3) > div > div');
    }

    totalBagAmount() {
      return this.priceItems.reduce((sum, item) => sum + item, 0);    
    }

    async goToDetailsItem(productName) {
      await this.bagIcon.click();
      let index = this.summaryBagModalNameItems.findIndex(product => product.getText().includes(productName));
      await this.summaryBagModalImageItems[index].click();
    }

    async removeItem(productName) {
      let index = this.summaryBagModalNameItems.findIndex(product => product.getText().includes(productName));
      await this.removeItemBtn[index].click();
    }

     
 }

 module.exports = new BagPage();