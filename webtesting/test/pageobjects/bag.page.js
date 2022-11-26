const Page = require('./page');

/**
 * sub page containing bag locators
 */
class BagPage extends Page {

  get bagIcon() {
    return $('#menuCart');
  }

  get summaryBagModal() {
    return $('#toolTipCart > div > table');
  }

  get summaryBagModalImageItems() {
    return $$('#product > td:nth-child(1) > a > img');
  }

  get summaryBagModalNameItems() {
    return $$('#product > td:nth-child(2) > a > h3');
  }

  get priceItems() {
    return $$('#product > td:nth-child(3) > p.price');
  }

  get totalPrice() {
    return $$('#toolTipCart > div > table  span.cart-total')[0];
  }

  get removeItemBtn() {
    return $$('#product > td:nth-child(3) > div > div');
  }

  totalBagAmount() {
    return this.priceItems.reduce((sum, item) => sum + item, 0);
  }

  async goToCartDetails(productName) {
    await this.bagIcon.click();
    const summary = await this.summaryBagModal;
    await summary.waitForDisplayed({ timeout: 10000 });
    let items = await this.summaryBagModalNameItems.map(product => product.getText());
    let index = items.findIndex(product => product.startsWith(productName.toUpperCase()));
    await this.summaryBagModalImageItems[index].click();
  }

  async removeItem(productName) {
    const summary = await this.summaryBagModal;
    await summary.waitForDisplayed({ timeout: 10000 });
    let items = await this.summaryBagModalNameItems.map(product => product.getText());
    let index = items.findIndex(product => product.startsWith(productName.toUpperCase()));
    await this.removeItemBtn[index].click();
  }


}

module.exports = new BagPage();