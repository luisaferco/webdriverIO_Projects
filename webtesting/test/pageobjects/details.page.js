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

    get details()  {
        return $('#Description > h1');
    }

    async addItemToCart(itemName){
        let elements = await this.items.map(item => item.getText());
        const index = elements.findIndex(element => element.startsWith(itemName));
        await this.items[index].click();
        await this.addToCartBtn.click();
    }

}

module.exports = new DetailsPage();