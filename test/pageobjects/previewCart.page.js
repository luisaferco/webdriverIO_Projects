const Page = require('./page');

/**
 * sub page containing Cart locators
 */
class PreviewCartPage extends Page {

  get CartIcon() {
    return $('#menuCart');
  }

  get summaryCartModal() {
    return $('#toolTipCart > div > table');
  }

  get summaryCartModalImageItems() {
    return $$('#product > td:nth-child(1) > a > img');
  }

  get summaryCartModalNameItems() {
    return $$('#product > td:nth-child(2) > a > h3');
  }

  get summaryCartModalQuantityItems() {
    return $$('#product > td:nth-child(2) > a > label:nth-child(2)');
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

  get cartLink() {
    return $('#shoppingCartLink > span');
  }

  get checkoutBtn() {
    return $('#checkOutPopUp');
  }

  totalCartAmount() {
    return this.priceItems.reduce((sum, item) => sum + item, 0);
  }

  async goToItemDetails(productName) {
    await this.previewCartDetails();
    const summary = await this.summaryCartModal;
    await summary.waitForDisplayed({ timeout: 10000 });
    let items = await this.summaryCartModalNameItems.map(product => product.getText());
    let index = items.findIndex(product => product.startsWith(productName.toUpperCase()));
    await this.summaryCartModalImageItems[index].click();
  }

  async removeItem(productName) {
    await this.previewCartDetails();
    let items = await this.summaryCartModalNameItems.map(product => product.getText());
    let index = items.findIndex(product => product.startsWith(productName.toUpperCase()));
    await this.removeItemBtn[index].click();
  }

  async previewCartDetails(){
    await this.CartIcon.moveTo();
    const summary = await this.summaryCartModal;
    await summary.waitForDisplayed({ timeout: 10000 });
  }

  async checkoutItems() {
    await this.previewCartDetails();
    await this.checkoutBtn.waitForDisplayed({ timeout: 5000 })
    await this.checkoutBtn.click();
  }

  async getQuantityItem(productName){
    await this.previewCartDetails();
    let items = await this.summaryCartModalNameItems.map(product => product.getText());
    let index = items.findIndex(product => product.startsWith(productName.toUpperCase()));
    return await this.summaryCartModalQuantityItems[index].getText();
  }

  async goToCart(){
    await this.CartIcon.click();
  }

}

module.exports = new PreviewCartPage();