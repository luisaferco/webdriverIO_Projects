const Page = require('./page');

class DetailsPage extends Page {
    get addToCartBtn () {
        return $('#productProperties > div.fixedBtn > button');
    }

    get items() {
        return $$('a.productName');
    }

    get addToCartBtn() {
        return $('#productProperties button');
    }

    get modalTitle()  {
        return $('#Description > h1');
    }

    async addItemToCart(itemName){
        await this.items.find(item => item.getText().includes(itemName)).click();
        await this.addToCartBtn.click();
    }

    async getDetailsModal() {
        return await this.modalTitle.getText();
    }

}